import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';

const Features = ({ id, header, items, columns = 3, hasBackground = false }: FeaturesProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass="section-spacing container-custom"
  >
    {header && (
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Headline
          header={header}
          titleClass="text-4xl md:text-5xl font-bold text-neutral-warm-900 mb-3 tracking-tight"
          subtitleClass="text-base md:text-lg text-neutral-warm-600 leading-relaxed"
        />
      </div>
    )}

    {items && (
      <div className={`${columns === 4 ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : columns === 2 ? 'grid grid-cols-1 md:grid-cols-2' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'} gap-6 lg:gap-8`}>
        {items.map(({ title, description, callToAction }, index) => (
          <div
            key={id ? `feature-${id}-${index}` : `feature-${index}`}
            className="bg-white rounded-2xl border border-neutral-warm-200 shadow-card p-6 md:p-7"
          >
            <div className="space-y-3">
              {title && (
                <h3 className="text-lg md:text-xl font-bold text-neutral-warm-900 leading-tight">
                  {title}
                </h3>
              )}

              {description && (
                <p className="text-neutral-warm-600 leading-relaxed">
                  {description}
                </p>
              )}

              {callToAction && (
                <div className="pt-2">
                  <CTA
                    callToAction={callToAction}
                    linkClass="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </WidgetWrapper>
);

export default Features;
