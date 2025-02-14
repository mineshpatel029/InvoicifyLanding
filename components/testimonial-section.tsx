"use client";
import { useState } from "react";
import Image from "next/image";

import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
const testimonials = [
  {
    id: 1,
    name: "Ramesh Sharma",
    role: "Business Owner",
    date: "20 Jun 2024",
    quote:
      "Invoicify has completely transformed how we handle billing. It's simple, efficient, and saves us so much time. A game-changer for our business!",
    image: "/Invoice.png",
  },
  {
    id: 2,
    name: "Ramesh Sharma",
    role: "Business Owner",
    date: "20 Jun 2024",
    quote:
      "Invoicify has completely transformed how we handle billing. It's simple, efficient, and saves us so much time. A game-changer for our business!",
    image: "/Invoice.png",
  },
  {
    id: 3,
    name: "Ramesh Sharma",
    role: "Business Owner",
    date: "20 Jun 2024",
    quote:
      "Invoicify has completely transformed how we handle billing. It's simple, efficient, and saves us so much time. A game-changer for our business!",
    image: "/Invoice.png",
  },
];
export default function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesPerView = 2;
  const totalSlides = Math.ceil(testimonials.length / slidesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-lg font-medium text-gray-600 mb-2">
        CLIENT TESTIMONIALS
      </h2>
      <h3 className="text-4xl font-bold text-gray-900 mb-12 ">
        What our users are saying
      </h3>

      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div
                key={slideIndex}
                className="w-full justify-center flex-shrink-0 flex flex-col md:flex-row gap-6 px-4"
              >
                {testimonials
                  .slice(
                    slideIndex * slidesPerView,
                    slideIndex * slidesPerView + slidesPerView,
                  )
                  .map((testimonial) => (
                    <div key={testimonial.id} className="flex-1 max-w-[470px]">
                      <div className="bg-white rounded-lg p-8 shadow-sm border h-full ">
                        <div className="flex items-center gap-3 mb-6">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={48}
                            height={48}
                            className="rounded-full w-[48px] h-[48px]"
                          />
                          <div className="text-left">
                            <h4 className="font-semibold text-gray-900">
                              {testimonial.name}
                            </h4>
                            <p className="text-gray-600 text-sm">
                              {testimonial.role}
                            </p>
                          </div>
                          <div className="ml-auto">
                            <p className="text-gray-500 text-sm">
                              {testimonial.date}
                            </p>
                          </div>
                        </div>
                        <div className="border-[1px] border-dashed my-4"></div>
                        <blockquote className="text-gray-700 text-lg text-left">
                          "{testimonial.quote}"
                        </blockquote>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? "bg-emerald-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
