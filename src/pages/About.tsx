
// import { useLanguage } from "@/contexts/LanguageContext";
// import { BookOpen, Users, Globe, Shield } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
// import { useState, useEffect } from "react";


// // ---- STORY IMAGES ----
// import img1 from "@/assets/1.jpg";
// import img2 from "@/assets/2.jpg";
// import img3 from "@/assets/3.jpg";
// import img4 from "@/assets/4.jpg";
// import img5 from "@/assets/5.jpg";
// import img6 from "@/assets/6.jpg";
// import img7 from "@/assets/7.jpg";
// import img8 from "@/assets/8.jpg";

// export default function About() {
//   const { t } = useLanguage();

//   const storyImages = [img1, img2, img3, img4, img5, img6, img7, img8];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % storyImages.length);
//     }, 4000); // change every 4 seconds

//     return () => clearInterval(interval);
//   }, [storyImages.length]);

//   const values = [
//     { icon: BookOpen, title: t("about.values.access") },
//     { icon: Users, title: t("about.values.equality") },
//     { icon: Globe, title: t("about.values.innovation") },
//     { icon: Shield, title: t("about.values.ethics") },
//   ];

//   const partnerships = [
//     { name: "Coursera", desc: "Official Partner - 250+ courses" },
//     { name: "Mastercard", desc: "Financial Support" },
//     { name: "BTU", desc: "400 students program" },
//     { name: "Kutaisi International University", desc: "Academic Partnership" },
//     { name: "Fastoo", desc: "Career opportunities" },
//     { name: "Multifunctional Center", desc: "Base location" },
//   ];
//   const [expanded, setExpanded] = useState(false);

// const fullText = t("about.story.content");
// const shortText = fullText.slice(0, 453) ;


//   return (
//     <div className="min-h-screen bg-[hsl(var(--nebula-darker))] pt-20">

  

//       {/* Story */}
//       <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
//         <div className="container mx-auto">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
            
//             {/* LEFT TEXT */}
          
// <div className="animate-fade-in flex flex-col justify-center h-full">
//   <h2 className="gradient-title font-orbitron text-4xl font-bold mb-6">
//     {t("about.story.title")}
//   </h2>

//  <p className="text-muted-foreground leading-relaxed text-xl max-w-xl">
//   {expanded ? (
//     <>
//       {fullText}
//       <span
//         onClick={() => setExpanded(false)}
//         className="ml-2 cursor-pointer text-[hsl(var(--nebula-cyan))] hover:underline"
//       >
//         {t("...")}
//       </span>
//     </>
//   ) : (
//     <>
//       {shortText}
//       <span
//         onClick={() => setExpanded(true)}
//         className="cursor-pointer text-[hsl(var(--nebula-cyan))] hover:underline"
//       >
//        ...
//       </span>
//     </>
//   )}
// </p>


//   {/* <p className="text-muted-foreground  leading-relaxed max-w-xl">
//     {t("about.story.content")}
//   </p> */}
// </div>

//             {/* RIGHT — AUTO IMAGE ROTATION */}
//             <div className="relative bg-[hsl(var(--nebula-darker))] rounded-2xl h-64 md:h-96 overflow-hidden border border-[hsl(var(--nebula-cyan)/0.2)] animate-scale-in">
//               {storyImages.map((img, index) => (
//                 <img
//                   key={index}
//                   src={img}
//                   alt="Story"
//                   className={`
//                     absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
//                     ${index === currentIndex ? "opacity-100" : "opacity-0"}
//                   `}
//                 />
//               ))}
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* Mission Quote */}
//       <section className="py-20 px-4">
//         <div className="container mx-auto">
//           <blockquote className="gradient-title font-orbitron text-2xl md:text-4xl font-bold text-center max-w-4xl mx-auto animate-fade-in-up">
//             "{t("about.mission.quote")}"
//           </blockquote>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
//         <div className="container mx-auto">
//           <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
//             {t("about.values.title")}
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {values.map((value, index) => (
//               <Card
//                 key={index}
//                 className="cosmic-card hover:scale-105 transition-transform duration-300 animate-fade-in"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <CardContent className="p-6 text-center">
//                   <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
//                     <value.icon className="h-8 w-8 text-primary" />
//                   </div>
//                   <h3 className="font-semibold text-foreground">{value.title}</h3>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Partnerships */}
//       <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
//         <div className="container mx-auto">
//           <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
//             {t("about.partnerships.title")}
//           </h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {partnerships.map((partner, index) => (
//             <Card
//               key={index}
//               className="cosmic-card hover:scale-105 transition-transform duration-300 animate-fade-in"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <CardContent className="p-6">
//                 <h3 className="text-lg font-semibold mb-2 text-foreground">
//                   {partner.name}
//                 </h3>
//                 <p className="text-sm text-muted-foreground">
//                   {partner.desc}
//                 </p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         </div>
//       </section>

//     </div>
//   );
// }


import { useLanguage } from "@/contexts/LanguageContext";
import { BookOpen, Users, Globe, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

// ---- STORY IMAGES ----
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.jpg";

export default function About() {
  const { t, language } = useLanguage();

  const storyImages = [img1, img2, img3, img4, img5, img6, img7, img8];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % storyImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // ---- SELECT SPLIT POINT BASED ON LANGUAGE ----
  const full = t("about.story.content");

  const splitGe =
    "შექმნეს Nebula AI Hub-ის ძირითადი გუნდი.";
  const splitEn =
    "formed the core team of Nebula AI Hub.";

  let [part1, part2] = ["", ""];

  if (language === "ka") {
    const index = full.indexOf(splitGe) + splitGe.length;
    part1 = full.slice(0, index);
    part2 = full.slice(index);
  } else {
    const index = full.indexOf(splitEn) + splitEn.length;
    part1 = full.slice(0, index);
    part2 = full.slice(index);
  }

  const values = [
    { icon: BookOpen, title: t("about.values.access") },
    { icon: Users, title: t("about.values.equality") },
    { icon: Globe, title: t("about.values.innovation") },
    { icon: Shield, title: t("about.values.ethics") },
  ];

  const partnerships = [
    { name: "Coursera", desc: "Official Partner - 250+ courses" },
    { name: "Mastercard", desc: "Financial Support" },
    { name: "BTU", desc: "400 students program" },
    { name: "Kutaisi International University", desc: "Academic Partnership" },
    { name: "Fastoo", desc: "Career opportunities" },
    { name: "Multifunctional Center", desc: "Base location" },
  ];

  return (
    <div className="min-h-screen mt-12 bg-[hsl(var(--nebula-darker))] pt-20">

      {/* STORY SECTION 1 — TEXT LEFT / IMAGES RIGHT */}
      <section className="py-20 px- mt-28 mb-28 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* TEXT LEFT */}
            <div className="animate-fade-in flex flex-col justify-center">
              <h2 className="gradient-title font-orbitron text-4xl font-bold mb-6">
                {t("about.story.title")}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-xl max-w-xl">
                {part1}
              </p>
            </div>

            {/* IMAGES RIGHT */}
            <div className="relative bg-[hsl(var(--nebula-darker))] rounded-2xl h-64 md:h-96 overflow-hidden border border-[hsl(var(--nebula-cyan)/0.2)] animate-scale-in">
              {storyImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Story"
                  className={`
                    absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                    ${index === currentIndex ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* STORY SECTION 2 — IMAGES LEFT / TEXT RIGHT */}
      <section className="py-20 mt-8 px-4 bg-[hsl(var(--nebula-dark))] border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* IMAGES LEFT */}
            <div className="relative bg-[hsl(var(--nebula-darker))] rounded-2xl h-64 md:h-96 overflow-hidden border border-[hsl(var(--nebula-cyan)/0.2)] animate-scale-in">
              {storyImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Story"
                  className={`
                    absolute inset-0 w-full h-full object-cover transition-opacity duration-1000
                    ${index === currentIndex ? "opacity-100" : "opacity-0"}
                  `}
                />
              ))}
            </div>

            {/* TEXT RIGHT */}
            <div className="animate-fade-in flex flex-col justify-center">
              <p className="text-muted-foreground leading-relaxed text-xl max-w-xl">
                {part2}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Mission Quote */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <blockquote className="gradient-title font-orbitron text-2xl md:text-4xl font-bold text-center max-w-4xl mx-auto animate-fade-in-up">
            "{t("about.mission.quote")}"
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">
          <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
            {t("about.values.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="cosmic-card hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 px-4 bg-[hsl(var(--nebula-dark))]">
        <div className="container mx-auto">
          <h2 className="gradient-title font-orbitron text-3xl md:text-4xl font-bold text-center mb-12">
            {t("about.partnerships.title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <Card
                key={index}
                className="cosmic-card hover:scale-105 transition-transform duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {partner.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
