import Image from "next/image";
import { galleryImages } from "@/data/site";

export function GalleryMarquee() {
  const images = [...galleryImages, ...galleryImages];

  return (
    <div className="marquee-track relative overflow-hidden py-2">
      <div className="animate-marquee flex w-max gap-4 sm:gap-5">
        {images.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className="group relative w-[15rem] shrink-0 sm:w-[19rem]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[8rem] rounded-b-2xl border border-ink/10 bg-cream-2">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 240px, 304px"
                className="object-cover transition-transform duration-[900ms] group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent opacity-70" />
              <figcaption className="absolute bottom-4 left-5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-cream/85">
                {image.caption}
              </figcaption>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
