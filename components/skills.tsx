import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    category: "Backend",
    skills: [
      "Spring Boot",
      "Spring MVC",
      "MyBatis",
      "JPA",
      "JWT",
      "Spring Security",
    ],
  },
  {
    category: "Frontend",
    skills: ["JavaScript", "React", "JSP(JSTL)", "HTML/CSS", "Axios", "Redux"],
  },

  {
    category: "Database & Infra",
    skills: ["MySQL", "Oracle DB", "API"],
  },
  {
    category: "Tools & Collaboration",
    skills: ["Git", "GitHub"],
  },
  {
    category: "Learning",
    skills: ["Next.js", "TypeScript"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-[var(--color-section-alt)]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-balance">
            Skills
          </h2>
        </div>

        {/* 카테고리 */}
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-muted-foreground">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm font-normal px-4 py-2"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
