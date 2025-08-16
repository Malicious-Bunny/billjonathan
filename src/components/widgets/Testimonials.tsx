import Link from 'next/link';
import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';
import ItemTestimonial from '../common/ItemTestimonial';

const Testimonials = ({
  header,
  testimonials,
  callToAction,
  isTestimonialUp,
  id,
  hasBackground = false,
}: TestimonialsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="section-spacing container-custom">
    {header && (
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Headline header={header} titleClass="text-4xl md:text-5xl font-bold" subtitleClass="text-base md:text-lg text-neutral-warm-600" />
      </div>
    )}
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ name, job, testimonial, image, href }, index) => (
          <div key={`item-testimonial-${index}`} className="bg-white rounded-2xl border border-neutral-warm-200 shadow-card p-6 h-full">
            {!callToAction && href ? (
              <Link href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
                <ItemTestimonial
                  name={name}
                  job={job}
                  testimonial={testimonial}
                  isTestimonialUp={isTestimonialUp}
                  hasDividerLine={true}
                  startSlice={0}
                  endSlice={180}
                  image={image}
                  containerClass="h-full"
                  panelClass="justify-between items-stretch w-full h-full gap-4"
                  nameJobClass="text-left"
                  jobClass="text-sm text-neutral-warm-500"
                  imageClass="mr-4 h-12 w-12 rounded-full"
                  testimonialClass="text-neutral-warm-700"
                />
              </Link>
            ) : (
              <ItemTestimonial
                name={name}
                job={job}
                testimonial={testimonial}
                isTestimonialUp={isTestimonialUp}
                hasDividerLine={true}
                startSlice={0}
                endSlice={180}
                image={image}
                containerClass="h-full"
                panelClass="justify-between items-stretch w-full h-full gap-4"
                nameJobClass="text-left"
                jobClass="text-sm text-neutral-warm-500"
                imageClass="mr-4 h-12 w-12 rounded-full"
                testimonialClass="text-neutral-warm-700"
              />
            )}
          </div>
        ))}
      </div>
    </div>
    {callToAction && (
      <CTA callToAction={callToAction} containerClass="flex justify-center mx-auto w-fit mt-10" linkClass="btn btn-primary" />
    )}
  </WidgetWrapper>
);

export default Testimonials;
