import { Button } from "@/components/ui/button";
import { Github, Mail } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="min-h-[82svh] flex items-center justify-center px-6 py-20 md:py-24 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[320px_1fr] lg:grid-cols-[360px_1fr] gap-12 lg:gap-16 items-start">
          {/* Left column */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative w-full max-w-[180px] ml-0 overflow-hidden rounded-2xl border border-border/40 shadow-md bg-card">
                <Image
                  src="/입사사진.jpg"
                  alt="윤단비 프로필 사진"
                  width={180}
                  height={240}
                  className="object-contain rounded-2xl"
                  priority
                />
              </div>
            </div>

            {/* Name & subtitle */}
            <div className="space-y-3 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                  윤단비
                </span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground font-medium">
                Full Stack Developer
              </p>

              {/* mini bio */}
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                학원에서{" "}
                <span className="font-semibold text-primary">출결률 1위</span>를
                달성하며{" "}
                <span className="font-semibold text-primary">성실성</span>을
                입증했고, 꾸준히 성장하는{" "}
                <span className="font-semibold text-primary">신입 개발자</span>
                입니다.
              </p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-2.5">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-transform duration-200 hover:scale-110"
                asChild
              >
                <a
                  href="https://github.com/Yundanbi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary transition-transform duration-200 hover:scale-110"
                asChild
              >
                <a
                  href="mailto:yundanbi40@gmail.com"
                  aria-label="이메일 보내기"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="relative rounded-3xl border border-border/50 bg-card/60 backdrop-blur-sm p-7 md:p-10 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.35)]">
            {/* intro */}
            <div className="space-y-4 text-[15px] leading-relaxed">
              <p className="text-foreground/90">
                현재 풀스택 프로젝트를 통해 웹 접근성과 사용자 경험을 고려한
                개발을 이어가고 있으며, Google AI Essentials 자격증 취득으로 AI
                기술 이해와 활용 능력을 넓혀가고 있습니다.
              </p>
              <p className="text-foreground/90">
                앞으로는 백엔드와 프론트엔드를 아우르는 역량을 기반으로, 더
                확장성 있고{" "}
                <span className="font-semibold text-primary">
                  유지보수 쉬운 코드
                </span>
                를 만들어가는 개발자가 되는 것을 목표로 하고 있습니다.
              </p>
            </div>

            {/* timeline */}
            <div className="mt-8 md:mt-10 grid gap-7">
              {/* item */}
              <div className="relative pl-8">
                <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary shadow-[0_0_0_4px_rgba(var(--primary-rgb,99,102,241),0.15)]" />
                <span className="absolute left-[5px] top-4 bottom-[-1.25rem] w-px bg-border/70" />
                <div className="flex flex-col gap-1">
                  <div className="text-[11px] md:text-xs font-semibold text-muted-foreground">
                    2025.10 - 현재
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-foreground">
                    신입 풀스택 개발자
                  </h3>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed">
                    다양한 프로젝트를 통해 개발 경험을 넓혀가고 있습니다.
                    프론트엔드/백엔드 기술을 모두 다루며, 웹 접근성 표준과 모범
                    사례를 고려한 UI 컴포넌트 설계와 구현에 집중합니다.
                  </p>
                </div>
              </div>

              {/* item */}
              <div className="relative pl-8">
                <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <span className="absolute left-[5px] top-4 bottom-[-1.25rem] w-px bg-border/70" />
                <div className="flex flex-col gap-1">
                  <div className="text-[11px] md:text-xs text-muted-foreground">
                    2025.03 - 10
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                    그린컴퓨터 아카데미
                  </h3>
                  <p className="text-sm text-muted-foreground/90">
                    풀스택 KD 과정 수료
                  </p>
                </div>
              </div>

              {/* item */}
              <div className="relative pl-8">
                <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
                <div className="flex flex-col gap-1">
                  <div className="text-[11px] md:text-xs text-muted-foreground">
                    2021 - 2023
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground">
                    인하공업전문대학
                  </h3>
                  <p className="text-sm text-muted-foreground/90">
                    정보통신학과
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /Right */}
        </div>
      </div>
    </section>
  );
}
