// Database Structure
//
// >> external_curriculums (collection)
//     > curriculum A (document ID)
//         Title: ...
//         Description: ...
//         Authors: ...
//         LastUpdated: ...
//         Link: ...

export const example_external_curriculums = [
  //   {
  //     Title: "How to Learn French: A Step-by-Step Guide for Beginners",
  //     Authors: "Miranda Parr, Preply",
  //     LastUpdated: "May 24, 2022",
  //     Link: "https://preply.com/en/blog/how-to-learn-french-step-by-step/",
  //     Subjects: ["Languages"],
  //   },
  {
    Title: "If I Started Learning Arabic Again, This Is How I'd Do It",
    Authors: "Donovan Nagel, Mezzofanti Guild",
    LastUpdated: "2022",
    Link: "https://www.mezzoguild.com/how-to-start-learning-arabic/",
    Subjects: ["Languages"],
    id: "L3NWrwQUUTdATQCsXa6a",
    sortTitle: "arabic-again-how-i'd-do-it"
  },
  {
    Title: "So You Want to Learn Physics…",
    Authors: "Susan Rigetti",
    LastUpdated: "2021",
    Link: "https://www.susanrigetti.com/physics",
    Subjects: ["Physics"],
    id: "bKfHEBE3vWEYMkWE1gYU",
    sortTitle: "so-you-want-to-learn-physics"
  },
];

// Profile Data Structure
//
// >> users (collection)
//     > user A (document ID)
//         Name: ...
//         Email: ...
//         Bio: ...

//         Current Paths: [path A, ...]
//            > Path A: {
//              - Title: ... 
//              - Start Date: ...
//              }
//            > Path ...

//         CompletedPaths: ...
//            > Path C: {
//              - Title: ...
//              - Start Date: ...
//              - End Date: ...
//              - Entry: ...
//              }
