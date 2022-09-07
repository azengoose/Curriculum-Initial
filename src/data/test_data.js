// Database Structure
//
// >> internal_curriculums (collection)
//     > curriculum A (document ID)
//         Title: ...
//         Description: ...
//         Type: ...
//         Authors: ...
//         LastUpdated: ...
//         Pricing: ...
//         Duration: ...
//         >> resources (collection)
//             > resource A (document ID)
//                 Title: ...
//                 Link: ...
//                 Duration: ...
//         >> steps (collection)
//             > step 1 (document ID)
//                 Title: ...
//                 Description: ...
//         >> reviews (collection)
//             > review A (document ID)
//                 Author: ...
//                 ReviewText: ...

export const curriculum = [
  {
    Title: "Mastery",
    Description:
      "A book by Robert Greene that details the journey to mastery over one's lifetime",
    Type: "Journey",
    Designers: "Robert Greene",
    LastUpdate: "01/08/22",
    Location: "Any",
    Price: "Buy the book",
    Duration: "Lifetime",
    Resources: [
      {
        Title: "1. Apprentice — Novice with limited knowledge or experience.",
        Length: "15-25 years"
      }
    ],
    Steps: [
      {
        Title: "Apprentice",
        Description: "Novice with limited knowledge or experience."
      },
      {
        Title: "Journeyman/woman",
        Description: "Credentialed, skilled practitioner."
      },
      {
        Title: "Master",
        Description:
          "Advanced credentials, skills and experienced practitioner."
      },
      { Title: "Mentor", Description: "Counselor to the craft." }
    ],
    Reviews: [
      {
        Name: "Angus",
        Stars: 3,
        ReviewText:
          "It's a nice idea to include this here, but just read the book or a summary online."
      }
    ]
  },
  {
    Title: "Shorting Computer Science",
    Description:
      "An experimental intensive curriculum for getting to terms with a large portion of the Computer Science field and implementing initial basic tutorials in a variety of applications. ",
    Type: "Experimental",
    Designers: "Angus",
    Location: "Online",
    Price: "Free",
    Duration: "1-2 Months",
    Resources: [
      {
        Title: "Programming",
        Link: "http://htdp.org/2022-2-9/Book/part_prologue.html",
        Length: "1-3 days"
      },
      {
        Title: "Data structures and algorithms",
        Link: "https://www.programiz.com/dsa",
        Length: "2-4 days"
      },
      {
        Title: "Software stack",
        Link: "https://www.coursera.org/learn/build-a-computer",
        Length: "1-2 weeks"
      },
      {
        Title: "Computer networking",
        Link: "https://gaia.cs.umass.edu/kurose_ross/lectures.php",
        Length: "4-7 days"
      },
      {
        Title: "Operating systems",
        Link: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
        Length: "4-7 days"
      },
      {
        Title: "Technology ethics",
        Link: "https://www.coursera.org/learn/ethics-technology-engineering",
        Length: "1-3 days"
      },
      {
        Title: "Full stack",
        Link: "https://fullstackopen.com/en/",
        Length: "2-3 weeks"
      },
      {
        Title: "machine learning",
        Link:
          "https://www.coursera.org/specializations/machine-learning-introduction",
        Length: "3-7 days"
      },
      {
        Title: "cyber security",
        Link: "https://www.coursera.org/specializations/intro-cyber-security",
        Length: "3-7 days"
      }
    ],
    Reviews: [
      {
        Name: "John Doe",
        Stars: 3,
        ReviewText:
          "Not enough time to finish all the courses in detail, but I was really motivated to do 'finish' this curriculum during this one month."
      },
      {
        Name: "Angus",
        Stars: 2,
        ReviewText: "Needs more testing. "
      }
    ],
    Steps: [
      {
        Title: "Input",
        Description:
          "Take in and consume resources that are for the independence of thinking."
      }
    ]
  },
  {
    Title: "Thinking Independently",
    Description:
      "An experimental set of resources to develop critical thinking and a lifestyle of thinking for yourself.",
    Type: "Journey",
    Designers: "Angus",
    Location: "Any",
    Price: "Free",
    Duration: "3 Months > Lifetime",
    Resources: [
      {
        Title: "1. Apprentice — Novice with limited knowledge or experience.",
        Length: "15-25 years"
      }
    ],
    Steps: [
      {
        Title: "Input",
        Description:
          "Take in and consume resources that are for the independence of thinking."
      },
      {
        Title: "Output",
        Description:
          "Start writing, start producing original works that pull from a variety of sources, creatively forming independent conclusions."
      },
      {
        Title: "Beyond",
        Description:
          "Practice moderated skepticism, continue input and output that fosters independence of thinking."
      }
    ],
    Reviews: [
      {
        Name: "Angus",
        Stars: 3,
        ReviewText:
          "It's a nice idea to include this here, but just read the book or a summary online."
      }
    ]
  },
  {
    Title: "Building this Company",
    Description:
      "Mapping out the approximate pathway of this company while putting to the test if it is enjoyable or useful at all, to use this software for that purpose.",
    Type: "Journey",
    Designers: "Angus",
    Location: "Any",
    Price: "Free as a hobby project until hiring and scaling.",
    Duration: "1-14 years",
    Resources: [
      {
        Title: "About The Company.",
        Length: "< 5 Minutes",
        Link: "https://sef13d.csb.app/"
      }
    ],
    Steps: [
      {
        Title: "Starting Out",
        Description:
          "Ensure that the project is something both the members and public can withstand for a long period of time. Conduct research, prototype, iterate until satisfied with a minimum viable product (MVP)."
      },
      {
        Title: "Output",
        Description:
          "Start writing, start producing original works that pull from a variety of sources, creatively forming independent conclusions."
      },
      {
        Title: "Beyond",
        Description:
          "Practice moderated skepticism, continue input and output that fosters independence of thinking."
      }
    ],
    Reviews: [
      {
        Name: "Angus",
        Stars: 3,
        ReviewText:
          "It's a nice idea to include this here, but just read the book or a summary online."
      }
    ]
  },
  {
    Title: "Shorting Linguistics",
    Description:
      "An experimental intensive curriculum for getting to terms with a large portion of the Linguistics field in theory via videos and online quizzes. ",
    Type: "Experimental",
    Designers: "Angus",
    Location: "Online",
    Price: "Free",
    Duration: "1-2 Months",
    Vision:
      "The goals of this is to have a baseline understanding of the whole of Linguistics, to allow further specialisation further, or to maintain this generalised understanding. ",
    Rationales:
      "The Coursera course, Miracles of the Human Language, is quite popular: you can check the reviews on the website yourself for a better assessment. This is followed by the very friendly Lingthusiasm blog, and then by a more structured, little bit more theoretical VLC courses, which I found extremely helpful for containing a lot of structure in the concepts already for ease of chunking; they provide good ready-made chunking models.",
    Resources: [
      {
        Title: "Miracles of the Human Language",
        Link: "https://www.coursera.org/learn/human-language",
        Length: "3-5 days"
      },
      {
        Title: "Virtual Linguistics Campus (Youtube)",
        Link: "https://www.youtube.com/c/LinguisticsMarburg/playlists",
        Length: "2-4 weeks"
      },
      {
        Title: "How to Teach Yourself Linguistics Online for Free",
        Link:
          "https://allthingslinguistic.com/post/164874346205/how-to-teach-yourself-linguistics-online-for-free",
        Length: "Reference"
      },
      {
        Title: "Virtual Linguistics Campus (Website)",
        Link: "https://oer-vlc.de/",
        Length: "1-2 Months"
      }
    ],
    Reviews: [
      {
        Name: "John Doe",
        Stars: 4,
        ReviewText:
          "Should have done this instead of spending my time and money at a university. "
      },
      {
        Name: "Angus",
        Stars: 2,
        ReviewText: "Needs more testing. "
      }
    ],
    Steps: [
      {
        Title: "Introduction and Acquaintance",
        Description:
          "Complete the popular Miracles of Human Language course as a more formal introduction before accessing the reference of 'How to Teach Yourself Linguistics Online for Free' and browsing a variety of resources. "
      },
      {
        Title: "Main Branches",
        Description:
          "Attain a fundamental understanding of the main branches of Linguistics using the Virtual Linguistics Campus website, including: Phonetics, Phonology, Morphology, Syntax, Semantics. "
      },
      {
        Title: "Specialisations and Interests",
        Description:
          "Browse the other variety of specialisations included in VLC, including the interdisciplinary topics."
      }
    ]
  },

  {
    Title: "Full BA Linguistics Curriculum by VLC",
    Description:
      "Here are all linguistic courses on the VLC (workload in hours) in brackets. In addition, all users have free access to the tools and glossaries (VLC100 - Tools and Data) and the Language Index (VLC100 - Language Index) with more than 500 languages and more than 300 varieties of the major languages - all with sound support. And our special offer: If you want to use a course/repository as a teacher, a customized clone, is created from the basic course which can then freely be used (also modified) by the institution. We cordially invite you to become a member of the VLC-Community. Just register (for free) and self-enrol to as many courses as you like. Prof. Dr. J. Handke (VLC-Project Manager)",
    Type: "Experimental",
    Designers: "VLC, Prof. Dr. J. Handke",
    Location: "Online",
    Price: "Free",
    Duration: "2 Months, 3 Months",
    Resources: [
      {
        Title: "Virtual Linguistics Campus (Youtube)",
        Link: "https://www.youtube.com/c/LinguisticsMarburg/playlists"
      },
      {
        Title: "Virtual Linguistics Campus (Website)",
        Link: "https://oer-vlc.de/",
        Length: "2-6 Months"
      }
    ],
    Reviews: [
      {
        Name: "John Doe",
        Stars: 4,
        ReviewText:
          "Should have done this instead of spending my time and money at a university. "
      },
      {
        Name: "Angus",
        Stars: 2,
        ReviewText: "Needs more testing. "
      }
    ],
    Steps: [
      {
        Title: "Introductory Level",
        Description:
          "VLC101 - Linguistic Fundamentals (120) \nVLC102 - Speech Science (90)"
      },
      {
        Title: "Basic Level",
        Description:
          "VLC103 - The Nature of Meaning (90) \n VLC104 - Words and Word Structure (90) \n VLC105 - Phonetics, Phonology & Transcription (90) \n VLC106 - Syntax - Part I (120) \n VLC107 - Syntax - Part II (120) \n VLC108 - Language Typology (120)"
      },
      {
        Title: "Advanced or Specialization",
        Description:
          "VLC109 - Phonetics and Phonology (120) \n VLC201 - The Structure of English (90) \n VLC202 - Historical Linguistics (90) \n VLC203 - The History of English (90) \n VLC204 - Linguistic Repetition for Students of English (120) \n VLC205 - Varieties of English (120) \n VLC206 - PDE Morphology & Syntax (120)"
      },
      {
        Title: "Specialization",
        Description:
          "VLC300 - Applied Linguistics (120) \n VLC301 - Psycholinguistics (120) \n VLC401 - Linguistic Fieldwork - Welsh (100) \n VLC402 - Linguistic Fieldwork - Japanese (100) \n VLC403 - Linguistic Fieldwork - Arabic (100) \n VLC404 - Linguistic Fieldwork - Jamaican Creole (100)"
      }
    ]
  }
];

export function DummyCurriculum() {
  return (
    <div className="data-ouput">
      <div
        id="explore-curriculum-wrapper"
        className="explore-curriculum-wrapper"
      >
        {curriculum.map(
          (
            {
              Title,
              Description,
              Designers,
              LastUpdate,
              Duration,
              Price,
              Location,
              Resources,
              Steps,
              Reviews
            },
            index
          ) => {
            return (
              <div className="curriculum-container" key={index}>
                <h3 className="curriculum-title">{Title}</h3>
                <div className="curriculum-description">
                  <p>Description: {Description}</p>
                  <p> Curriculum Designers: {Designers}</p>
                  <p>
                    Last Updated:
                    {LastUpdate ? <span> {LastUpdate}</span> : " N/A"}
                  </p>
                  <p> Duration: {Duration}</p>
                  <p> Pricing: {Price}</p>
                  <p> Location: {Location}</p>
                </div>
                <div className="curriculum-resources">
                  <p> Resources: </p>
                  {Resources.map((e, i) => {
                    return (
                      <div className="curriculum-resource" key={i}>
                        <p>{e.Title}</p>
                        <p>
                          {e.Length ? <span>Length: {e.Length}</span> : " "}
                          {e.Link ? (
                            <span>
                              , <a href={e.Link}>Go to Resource</a>
                            </span>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="curriculum-steps">
                  <p> Steps: </p>
                  {Steps.map((e, i) => {
                    return (
                      <div className="curriculum-step" key={i}>
                        <p>{e.Title}</p>
                        <p>{e.Description}</p>
                      </div>
                    );
                  })}
                </div>
                <div className="curriculum-reviews">
                  <p> Reviews: </p>
                  {Reviews.map((e, i) => {
                    return (
                      <div className="curriculum-review" key={i}>
                        <p>by {e.Name}</p>
                        <p>Rating: {e.Stars} out of 5 </p>
                        <p>{e.ReviewText}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}
