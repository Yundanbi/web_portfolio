"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "숙소예약 관리 웹사이트",
    period: "2025.07.15 ~ 2025.09.05",
    description:
      "StayFolio 사이트를 벤치마킹한 팀 프로젝트입니다. Spring MVC + JSP(JSTL)로 숙소 검색·예약·결제 플로우를 구현했습니다.",
    image: "/스테이폴리오.png",
    tags: ["Spring MVC", "JavaScript", "JSP", "Oracle DB", "Selenium"],
    github: "https://github.com/Yundanbi/stay_folio_main",
    highlights: [
      "카테고리/인원/날짜 기반 숙소 검색",
      "예약·결제 처리 및 상태 관리",
      "비회원 예약 확인 & 취소",
    ],
  },
  {
    title: "식품 중심의 이커머스 플랫폼",
    period: "2025.07.31 ~ 2025.09.25",
    description:
      "마켓컬리 클론 프로젝트로 JWT 인증, 권한 기반 게시판, HuggingFace 감성분석을 구현했습니다.",
    image: "/컬리.png",
    tags: ["Spring Boot", "React", "JWT", "Java", "MySQL", "HuggingFace"],
    github: "https://github.com/Yundanbi/kurly_hf_sentiment",
    highlights: [
      "JWT 로그인 & 권한 분리",
      "게시판 CRUD + 페이징, 관리자 답변",
      "Flask 감성 분석 서버 연동",
    ],
  },
  {
    title: "온라인 서점 웹 애플리케이션",
    period: "2025.05.12 ~ 2025.06.23",
    description:
      "권한(일반/관리자)에 따라 접근 제어, 도서 관리(관리자), 게시판 CRUD를 직접 구현했습니다.",
    image: "/교보.PNG",
    tags: ["JSP", "JavaScript", "Servlet", "JDBC", "MySQL", "Eclipse"],
    github: "https://github.com/Yundanbi/Kyobo",
    highlights: [
      "회원가입 / 로그인 / 로그아웃",
      "게시판 등록·수정·삭제",
      "관리자 도서 등록·수정·삭제",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
              Projects
            </span>
          </h2>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            제가 작업한 대표 프로젝트입니다.
          </p>
        </div>

        <div className="mt-10 space-y-14">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group rounded-2xl p-6 md:p-8 bg-gradient-to-b from-muted/40 to-background border border-border/60 shadow-sm hover:shadow-md transition-shadow"
    >
      <div
        className={`grid gap-8 items-center ${
          isEven ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.2fr]"
        }`}
      >
        {/* Image Block - 동일 크기 유지 */}
        <div className={`${isEven ? "order-1" : "order-2"}`}>
          <div className="relative w-full rounded-xl overflow-hidden bg-muted/60 ring-1 ring-border">
            <div className="relative aspect-[16/9]">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 640px, 100vw"
                priority={index === 0}
              />
            </div>
          </div>
        </div>

        {/* Content Block */}
        <div className={`${isEven ? "order-2" : "order-1"}`}>
          <div className="flex items-start justify-between gap-2">
            <div>
              <h3 className="text-xl md:text-2xl font-bold leading-snug">
                {project.title}
              </h3>
              <p className="mt-1 text-xs md:text-sm text-muted-foreground">
                {project.period}
              </p>
            </div>
            <div className="flex gap-1 flex-shrink-0">
              <Button
                variant="default"
                size="sm"
                className="gap-1 bg-primary text-primary-foreground hover:bg-primary/90 px-2 py-1 text-xs"
                asChild
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-3 w-3" />
                  <span>GitHub</span>
                </a>
              </Button>
            </div>
          </div>

          <p className="mt-3 text-sm text-foreground/90 leading-relaxed">
            {project.description}
          </p>

          <ul className="mt-3 space-y-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-1.5">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary/80" />
                <span className="text-sm text-foreground/90">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="font-normal px-2 py-0.5 text-xs md:text-sm rounded-full border border-border/70 bg-muted/60"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;
