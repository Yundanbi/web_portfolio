import { LayoutGrid, Server, Database } from "lucide-react";

const Badge = ({ children, className = "" }: any) => (
  <span
    className={`inline-block rounded-full border px-2 py-0.5 text-xs ${className}`}
  >
    {children}
  </span>
);

export function Values() {
  const stacks = [
    {
      icon: Server,
      title: "Backend",
      desc: "Spring 기반 서버 개발과 인증/권한 관리 경험",
      tags: [
        "Spring Boot",
        "Spring MVC",
        "MyBatis",
        "JPA",
        "JWT",
        "Spring Security",
      ],
    },
    {
      icon: LayoutGrid,
      title: "Frontend",
      desc: "React와 JSP로 사용자 경험을 고려한 UI 구현",
      tags: ["React", "JavaScript", "Axios", "Redux", "JSP(JSTL)"],
    },
    {
      icon: Database,
      title: "Database · Tools",
      desc: "데이터베이스와 협업 도구를 활용한 프로젝트 경험",
      tags: ["MySQL", "Oracle DB", "GitHub", "SourceTree"],
    },
  ];

  return (
    <section className="py-16 px-6 bg-[var(--color-section-alt)]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {stacks.map(({ icon: Icon, title, desc, tags }) => (
            <div
              key={title}
              className="h-full rounded-2xl border border-border/60 bg-background/80 p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-base md:text-lg font-semibold">{title}</h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {desc}
                </p>
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {tags.map((t) => (
                    <Badge
                      key={t}
                      className="px-2 py-0.5 text-[11px] md:text-xs rounded-full border border-border/60"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
