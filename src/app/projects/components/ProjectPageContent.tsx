"use client";

import React, { useRef } from "react";
import ReactLenis from "lenis/react";
import Section from "@/app/projects/components/Section";
import HorizontalScroll from "@/app/projects/components/HorizontalScroll";
import ProjectHero from "@/app/projects/components/ProjectHero";
import HeaderSecondary from "@/components/HeaderSecondary";
import ItemFooter from "@/app/projects/components/ItemFooter";
import { projects } from "@/data/projectsData";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import useMediaQuery from "@/hooks/useMediaQuery";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPageContent() {
  const currentProject = projects[0];
  const router = useRouter();

  const mainContainerRef = useRef<HTMLDivElement>(null);
  const sectionToToggleRef = useRef<HTMLDivElement>(null);
  const itemFooterRef = useRef<HTMLDivElement>(null);
  const progressBarFillRef = useRef<HTMLDivElement>(null);

  const navigatedRef = useRef(false);

  const isMdlOrLarger = useMediaQuery("(min-width: 1024px)");

  useGSAP(
    () => {
      if (
        !itemFooterRef.current ||
        !sectionToToggleRef.current ||
        !progressBarFillRef.current
      ) {
        return;
      }

      if (isMdlOrLarger) {
        navigatedRef.current = false;
        const st = ScrollTrigger.create({
          trigger: itemFooterRef.current,
          start: "top top",
          end: `+=${window.innerHeight}`,
          pin: itemFooterRef.current,
          pinSpacing: true,
          scrub: 0.5,

          onUpdate: (self) => {
            gsap.set(progressBarFillRef.current, { scaleX: self.progress });

            if (sectionToToggleRef.current) {
              if (self.progress > 0.001) {
                // Если прогресс начался
                if (
                  gsap.getProperty(sectionToToggleRef.current, "autoAlpha") ===
                  1
                ) {
                  gsap.to(sectionToToggleRef.current, {
                    autoAlpha: 0,
                    duration: 0.2,
                    overwrite: "auto",
                  });
                }
              } else {
                if (
                  gsap.getProperty(sectionToToggleRef.current, "autoAlpha") ===
                  0
                ) {
                  gsap.to(sectionToToggleRef.current, {
                    autoAlpha: 1,
                    duration: 0.2,
                    overwrite: "auto",
                  });
                }
              }
            }

            if (
              self.progress >= 0.999 &&
              self.isActive &&
              !navigatedRef.current
            ) {
              navigatedRef.current = true;
              router.push("/projects");
            } else if (self.progress < 0.999 && navigatedRef.current) {
              navigatedRef.current = false;
            }
          },
          onToggle: (self) => {
            if (!self.isActive && sectionToToggleRef.current) {
              if (
                gsap.getProperty(sectionToToggleRef.current, "autoAlpha") === 0
              ) {
                gsap.to(sectionToToggleRef.current, {
                  autoAlpha: 1,
                  duration: 0.2,
                  overwrite: "auto",
                });
              }
            }
          },
        });

        return () => {
          st.kill();
          if (sectionToToggleRef.current) {
            gsap.set(sectionToToggleRef.current, {
              autoAlpha: 1,
              overwrite: "auto",
            });
          }
          if (progressBarFillRef.current) {
            gsap.set(progressBarFillRef.current, {
              scaleX: 0,
              overwrite: "auto",
            });
          }
          if (itemFooterRef.current) {
            gsap.set(itemFooterRef.current, { clearProps: "all" });
          }
        };
      } else {
        if (sectionToToggleRef.current) {
          gsap.set(sectionToToggleRef.current, {
            autoAlpha: 1,
            overwrite: "auto",
          });
        }
        if (progressBarFillRef.current) {
          gsap.set(progressBarFillRef.current, {
            scaleX: 0,
            overwrite: "auto",
          });
        }
        if (itemFooterRef.current) {
          gsap.set(itemFooterRef.current, { clearProps: "all" });
        }
      }
    },
    { scope: mainContainerRef, dependencies: [isMdlOrLarger, router] }
  );

  return (
    <ReactLenis root>
      <div ref={mainContainerRef} className="p-0 m-0">
        <HeaderSecondary />
        <ProjectHero project={currentProject} />
        <HorizontalScroll />
        <div ref={sectionToToggleRef}>
          <Section title="End of the gallery" />
        </div>
        <ItemFooter ref={itemFooterRef} progressBarRef={progressBarFillRef} />
      </div>
    </ReactLenis>
  );
}
