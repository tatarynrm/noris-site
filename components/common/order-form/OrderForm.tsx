'use client'; // Ensure it's a client component

import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import axios from 'axios';
import { API_URL } from '@/lib/urls';
import Confetti from '../confetti/confetti';

interface FormData {
  name: string;
  email: string;
  phone: string;
  categories: string[];
}

const categoriesOptions = [
  { value: 'telegram', label: 'Telegram Bot' },
  { value: 'web-site', label: 'Web сайт' },
  { value: 'database', label: 'База даних' },
  { value: 'mobile-app', label: 'Мобільний додаток' },
  { value: 'automation', label: 'Автоматизація процесів' },
];

const playSuccessSound = () => {
  const audio = new Audio('/sounds/success.mp3'); // Adjust the path to your sound file
  audio.play();

  // Stop audio after 7 seconds
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0; // Reset playback
  }, 6000); // 6000 milliseconds = 6 seconds
};

const OrderForm = ({ isOpen, toggleSheet }: { isOpen: any; toggleSheet: any }) => {
  const { register, handleSubmit, control, formState: { errors }, getValues, setValue } = useForm<FormData>({
    defaultValues: {
      categories: [],
    },
  });
  const storedEmail = localStorage.getItem('email');
  const storedName = localStorage.getItem('name');
  const [confetti, setConfetti] = useState(false);

  const onSubmit = async (data: FormData) => {
    const { data: result } = await axios.post(`https://api.noris-dev.site/orders/create`, data);

    console.log(result);

    if (result?.id) {
      setConfetti(true);
      playSuccessSound();
      setTimeout(() => {
        toggleSheet();
        setConfetti(false);
      }, 5000);
    }
  };
console.log(storedEmail,'store - email');
console.log(storedName,'store - name');

  // Retrieve email and name from localStorage and set them in the form

  return (
    <Sheet open={isOpen} onOpenChange={toggleSheet}>
      <SheetContent
        side="bottom"
        className="w-full h-[90vh] p-6"
        style={{
          backgroundImage: 'url(/images/jpeg/form-bg.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
        }}
      >
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription className="font-bold text-xl text-gray-700">
            Заповніть всі поля, щоб надіслати запит.
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="flexflex-col gap-4 md:grid grid-cols-1 lg:grid-cols-3">
          {/* Name Field */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm font-semibold">
              Ім'я
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Ім\'я обов\'язкове' })}
              className="p-2 border border-gray-300 rounded-md bg-purple-200"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email Field */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-semibold">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email обов\'язковий',
                pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              })}
              className="p-2 border border-gray-300 rounded-md bg-purple-200"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Phone Field */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-semibold">
              Телефон
            </label>
            <input
              id="phone"
              type="tel"
              {...register('phone', { required: 'Телефон обов\'язковий' })}
              className="p-2 border border-gray-300 rounded-md bg-purple-200"
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
          </div>

          {/* Categories Field (Multi-Select) */}
          <div className="flex flex-col col-span-2">
            <label htmlFor="categories" className="text-sm font-semibold">
              Виберіть категорії
            </label>
            <Controller
              name="categories"
              control={control}
              rules={{ required: 'Вибір категорії обов\'язковий' }}
              render={({ field }) => (
                <Select
                  {...field}
                  isMulti
                  options={categoriesOptions}
                  className="react-select-container w-full"
                  classNamePrefix="react-select"
                  placeholder="Виберіть категорії..."
                  value={categoriesOptions.filter(option => field.value.includes(option.value))}
                  onChange={(selectedOptions) => {
                    const values = selectedOptions
                      ? selectedOptions.map((option: any) => option.value)
                      : [];
                    field.onChange(values); // Update form categories value
                    setValue('categories', values); // Update categories in form
                  }}
                />
              )}
            />
            {errors.categories && <span className="text-red-500 text-sm">{errors.categories.message}</span>}
          </div>

          {/* Selected categories (display tags) */}
          <div className="col-span-2">
            <div className="flex flex-wrap gap-2">
              {getValues('categories')?.map((category: string, index: number) => {
                const categoryLabel = categoriesOptions.find(opt => opt.value === category)?.label;
                return (
                  categoryLabel && (
                    <div key={index} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-lg text-sm">
                      {categoryLabel}
                    </div>
                  )
                );
              })}
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 text-center mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-purple-400 text-white rounded-lg hover:bg-green-200 hover:text-black cursor-pointer"
            >
              Відправити
            </button>
            {confetti && (
              <>
                <br />
                <br />
                <br />
                <div className="text-center">
                  <span className="block font-bold text-3xl mb-4">Заявку успішно відправлено 😀</span>
                  <span className="block text-lg">Ми з вами зв'яжемось найближчим часом.</span>
                </div>
              </>
            )}
            {confetti && <Confetti />}
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default OrderForm;
