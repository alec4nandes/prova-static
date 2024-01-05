module.exports = function () {
    return {
        events: sips.map((sip) => ({
            ...sip,
            description: sip.description.toUpperCase(),
            display_date: sip.display_date.toUpperCase(),
        })),
    };
};

const sips = [
    {
        name: "SOCIAL INNOVATION, EXPERIMENTATION & CREATIVITY. LIVE AT PIANOFIGHT",
        description:
            "WITH PIANOFIGHT CO-FOUNDERS: ROB READY, ARTISTIC DIRECTOR, & DAN WILLIAMS, EXECUTIVE DIRECTOR",
        display_date: "15 MARCH 2023",
    },
    {
        name: "EQUITY, ACCESS & BELONGING IN SOCIAL INNOVATION. LIVE AT PIANOFIGHT",
        description:
            "WITH KATE BICKERT, SENIOR DIRECTOR, STRATEGIC INNOVATION, GOLDEN GATE NATIONAL PARKS CONSERVANCY",
        display_date: "1 MARCH 2023",
    },
    {
        name: "SOCIAL INNOVATION & COMEDY. LIVE AT PIANOFIGHT",
        description:
            "WITH NICOLE ODELL, ARTISTIC DIRECTOR, KILLING MY LOBSTER, & SCOTT MEYER, DIRECTOR, ENDGAMES IMPROV",
        display_date: "22 FEBRUARY 2023",
    },
    {
        name: "THE STATE OF THE ARTS COMMUNITY IN SAN FRANCISCO. LIVE AT PIANOFIGHT",
        description: "WITH NIKKI MEÑEZ, CURATORIAL DIRECTOR, Z SPACE",
        display_date: "14 DECEMBER 2022",
    },
    {
        name: "BUILDING CROSS-SECTOR PARTNERSHIPS FOR SOCIAL INNOVATION. LIVE AT PIANOFIGHT",
        description:
            "WITH ANNE LUFKIN-RIAÑO, CHIEF IMPACT & GROWTH OFFICER, WEAVING IMPACT",
        display_date: "9 NOVEMBER 2022",
    },
    {
        name: "COMMUNITY ENGAGEMENT IN THE SOCIAL PURPOSE SECTOR. LIVE AT PIANOFIGHT",
        description:
            "WITH MORGAN DICKERSON, COMMUNITY ENGAGEMENT MANAGER, buildOn",
        display_date: "26 OCTOBER 2022",
    },
    {
        name: "ACCOUNTABILITY IN COMMUNITY REPORTING. LIVE AT PIANOFIGHT",
        description:
            "WITH YO ANN MARTINEZ, SENIOR PRODUCER, COMMUNITY ENGAGEMENT, KQED",
        display_date: "12 OCTOBER 2022",
    },
    {
        name: "COMMUNITY LISTENING: DOING IT WELL AND EQUITABLY. LIVE AT PIANOFIGHT",
        description: "WITH VALERIE THRELFALL, MANAGING DIRECTOR, LISTEN4GOOD",
        display_date: "28 SEPTEMBER 2022",
    },
    {
        name: "STARTING A SOCIAL IMPACT PROGRAM: TECH EDITION. LIVE AT PIANOFIGHT",
        description: "WITH MORGAN ST CLAIR, NONPROFIT PRODUCT MANAGER, BOX",
        display_date: "14 SEPTEMBER 2022",
    },
    {
        name: "EVIDENCE-BASED IMPACT. LIVE AT PIANOFIGHT",
        description:
            "WITH REBECCA TAMIRU, PROGRAM MANAGER, CLIMATE ADVOCACY LAB",
        display_date: "24 AUGUST 2022",
    },
    {
        id: "170502748310",
        name: "WHY AN INCLUSIVE OUTDOORS MATTERS",
        description:
            "Carter McBride joins us to talk about the outdoors, access to leisure, safety, and inclusion.",
        url: "https://www.eventbrite.com/e/sip-why-an-inclusive-outdoors-matters-tickets-170502748310",
        display_date: "14 September 2021",
        start: {
            utc: "September 14, 2021",
        },
        end: {
            utc: "September 14, 2021",
        },
        text: '<div>SIP is a monthly program-based happy hour with informal community conversations about pressing social issues.</div><div style="margin-top: 20px"><div style="margin: 20px 10px;font-size: 15px;line-height: 22px;font-weight: 400;text-align: left;"><p>Prova Lab is an organization dedicated to catalyzing social innovation. A key element of this mission is our engaged &amp; supportive network of collaborative, purpose-driven people. This group includes social impact &amp; nonprofit professionals, educators,  entrepreneurs, and other folks in the community who are interested in learning more about social issues.</p><p></p><p>Our 2021 SIP programming will be focused on climate justice. We continue this month with Carter McBride, who will join us to talk about the outdoors, access to leisure, safety and inclusion.</p><p></p><p>Please join us on TUESDAY, SEPTEMBER 14th online.</p><p></p><p>WHO IS CARTER?</p><p>Carter McBride is an Optimist, Bridge Builder, Curiosity Stimulator, Practical Visionary and Leader Mentor whose personal and professional mission is to assist both individuals and groups to become more curious. Curiosity to actively identify patterns, behaviors and methods to execute successful outcomes for desired inclusive and equitable intentions.</p><p>He has worked in various roles for the National Parks Conservation Association, Outdoor Afro, National Outdoor Leadership School, North Cascades Institute, the Wilderness Awareness School, and the Boy Scouts of America.</p><p>**This event is free.**</p></div></div>',
    },
    {
        id: "166082526307",
        name: 'THE "JUSTICE" IN CLIMATE JUSTICE',
        description:
            'Professor Alice Kaswan will chat with us about what "justice" means in the context of climate justice.',
        url: "https://www.eventbrite.com/e/sip-a-social-purpose-happy-hour-tickets-166082526307",
        display_date: "10 August 2021",
        start: {
            utc: "August 10, 2021",
        },
        end: {
            utc: "August 10, 2021",
        },
        text: '<div>SIP is a monthly program-based happy hour with informal community conversations about pressing social issues.</div><div style="margin-top: 20px"><div style="margin: 20px 10px;font-size: 15px;line-height: 22px;font-weight: 400;text-align: left;"><p>Prova Lab is an organization dedicated to catalyzing social innovation. A key element of this mission is our engaged &amp; supportive network of collaborative, purpose-driven people. This group includes social impact &amp; nonprofit professionals, educators, social entrepreneurs, and other folks in the community who are interested in learning more about social issues.</p><p></p><p>Our 2021 SIP programming will be focused on climate justice. We continue this month with Professor Alice Kaswan from USF, who will chat with us about what "justice" means in the context of climate justice.</p><p></p><p>Please join us on TUESDAY, 10 AUGUST online.</p><p></p><p>WHO IS ALICE?</p><p>Alice Kaswan is Professor and Associate Dean for Faculty Scholarship at the University of San Francisco School of Law. She is an expert on climate change policy and on environmental justice. She has explored climate justice governance in the context of climate adaptation, strategic and inclusive climate action planning, and market-based mechanisms.</p><p>Kaswan received her B.S., with highest honors, from UC Berkeley and her J.D., cum laude, from Harvard Law School. She is an elected member of the American Law Institute, a member of the Board of Directors for the Center for Progressive Reform, and a past Chair of the Association of American Law Schools’ Environmental Law Section.</p><p></p><p>**This event is free.**</p></div></div>',
    },
    {
        id: "161956053917",
        name: "OUR 50TH. LIVE AT MANNY'S",
        description:
            "We are delighted to team up with Sejal Choksi-Chugh, Executive Director of San Francisco Baykeeper, to discuss climate justice.",
        url: "https://www.eventbrite.com/e/sip-a-spoke-happy-hour-tickets-161956053917",
        display_date: "13 July 2021",
        start: {
            utc: "July 13, 2021",
        },
        end: {
            utc: "July 13, 2021",
        },
        text: "<div>SIP is a monthly happy hour event based on informal community conversations about pressing social issues.</div><div style=\"margin-top: 20px\"><div style=\"margin: 20px 10px;font-size: 15px;line-height: 22px;font-weight: 400;text-align: left;\"><p>Prova Lab is an organization dedicated to catalyzing social innovation. A key element of this mission is our engaged &amp; supportive network, called Spoke, of collaborative, purpose-driven people. This group includes social impact &amp; nonprofit professionals, educators, social entrepreneurs, and other folks in the community who are interested in learning more about social issues.</p><p>To celebrate our 50th SIP, we are delighted to team up with Sejal Choksi-Chugh &amp; Manny's to discuss climate justice.</p><p>WHO IS SEJAL?</p><p>Sejal Choksi-Chugh serves as the Executive Director of San Francisco Baykeeper, an organization that's been defending the Bay from the biggest threats for over 30 years, and leading the charge to reduce toxic industrial runoff, mercury contamination, pesticides pollution, and sewage and oil spills in the Bay. Sejal grew up in Atlanta and attended Emory University. She holds a J.D. with a specialization in Environmental Law from the University of California at Berkeley. Courtesy of an Equal Justice Works legal fellowship in 2002, she joined the Baykeeper team straight out of law school inspired to hold polluters accountable and fight for healthy communities -- and she's grateful that's exactly what she does every day.</p><p>WHAT IS MANNY'S?</p><p>A community-focused meeting and learning place in the heart of San Francisco that combines a nonprofit restaurant, political bookshop, and civic events and gathering space.</p><p>**This event is free.** But food &amp; drinks will be available for purchase from Farming Hope.</p><p>WHAT IS FARMING HOPE?</p><p>Farming Hope is a 501(c)(3) community organization. We foster community leaders in the food system, through empowering jobs and career training in garden and culinary work. Our Apprentices face major barriers to employment, experiencing homelessness or being at-risk. Growing and serving food allows our employees to give back to their city. We’re all hungry to give back and belong.</p></div></div>",
    },
    {
        name: "THE LIVE SHOW. A PICNIC WITH KAT & HELKE",
        description:
            "SIP began as a series of informal online happy hours to raise awareness and connect on issues in our community. As shelter-in-place restrictions lift in California, we want to take the opportunity to meet in person.",
        display_date: "15 June 2021",
        start: {
            utc: "June 15, 2021",
        },
        end: {
            utc: "June 15, 2021",
        },
    },
    {
        name: "THE CALIFORNIA ENVIRONMENTAL QUALITY ACT 101",
        description:
            "Kelly Young is an environmental planner with the City of San Francisco. Kelly will talk us through the California Environmental Quality Act and what it means for impact reporting in government.",
        display_date: "29 April 2021",
        start: {
            utc: "April 29, 2021",
        },
        end: {
            utc: "April 29, 2021",
        },
    },
    {
        name: "CANNABIS MARKETING. WHY WORDS MATTER",
        description:
            "Amy Watkins, a content specialist for the Canadian government, will lead a chat examining the origins of Cannabis slang, and the racist context in which many policies and language have been developed in North America.",
        display_date: "22 April 2021",
        start: {
            utc: "April 22, 2021",
        },
        end: {
            utc: "April 22, 2021",
        },
    },
    {
        name: "THE CONSEQUENCES OF FAKE MEDICINE",
        description:
            "Rick Roberts (Advisory Board Member, Partnership for Safe Medicines) and co-presenter Shabbir Safdar (ED, Partnership for Safe Medicines) will discuss policies surrounding medicine safety and the consequences of fake medicine on people and the economy.",
        display_date: "8 April 2021",
        start: {
            utc: "April 8, 2021",
        },
        end: {
            utc: "April 8, 2021",
        },
    },
    {
        name: "WHY WE NEED A BETTER INTERNET",
        description:
            "This week, join Meg Trowbridge for a chat about online privacy. Meg is a Senior Copywriter at Mozilla, the maker of the Firefox browser and non-profit organization working with tech creators and policymakers to build a better internet.",
        display_date: "1 April 2021",
        start: {
            utc: "April 1, 2021",
        },
        end: {
            utc: "April 1, 2021",
        },
    },
    {
        name: "UNPACKING PERSONAL SOCIAL CHALLENGES",
        description:
            "In 2018 Andrew Patterson climbed Table Mountain in South Africa every day to raise funds for three nonprofits. He will be talking about committing to small changes that lead to big impact.",
        display_date: "25 March 2021",
        start: {
            utc: "March 25, 2021",
        },
        end: {
            utc: "March 25, 2021",
        },
    },
    {
        name: "DISASTER RISK & CULTURAL HERITAGE",
        description:
            "An Architectural Preservation Architect at Fundação Casa de Rui Barbosa (Brazil), Márcia Furriel will lead this discussion on disaster risk management of cultural heritage, with a focus on the consequences of climate change.",
        display_date: "18 March 2021",
        start: {
            utc: "March 18, 2021",
        },
        end: {
            utc: "March 18, 2021",
        },
    },
    {
        name: "REPRODUCTIVE JUSTICE",
        description:
            "Darby Morris, a trained birth and postpartum doula, will be speaking about reproductive justice, with a focus on pregnancy and birth.",
        display_date: "11 March 2021",
        start: {
            utc: "March 11, 2021",
        },
        end: {
            utc: "March 11, 2021",
        },
    },
    {
        name: "WILL TRAVEL BE THE SAME AFTER COVID-19?",
        description:
            "There is a growing momentum to address tourism's carbon footprint, but what kind of impact or small adjustments can we make to our travel habits on the planet? We dive deeper into this topic with Nicole Cocolas this week. In her final year as a PhD candidate at the University of Queensland, Nicole's research focuses on changing attitudes toward air travel to better reflect climate concern.",
        display_date: "4 March 2021",
        start: {
            utc: "March 4, 2021",
        },
        end: {
            utc: "March 4, 2021",
        },
    },
    {
        name: "CORPORATE SUSTAINABILITY REPORTING",
        description:
            "Charles Orgbon III is a sustainability and social impact consultant. This chat will focus on how we compare companies' sustainability performance, common frameworks, and why these standards should matter to you as a consumer, employee, or potential investor.",
        display_date: "25 February 2021",
        start: {
            utc: "February 25, 2021",
        },
        end: {
            utc: "February 25, 2021",
        },
    },
    {
        name: "VOTER CAMPAIGNING 2020. WHERE IT MATTERED.",
        description:
            "Mark Mullen is back to discuss important changes in the voter turnout process post-election. We'll look at the effects of online/ app methods, geographic and demographic targeting in places like Georgia, and talk about what the future holds.",
        display_date: "18 February 2021",
        start: {
            utc: "February 18, 2021",
        },
        end: {
            utc: "February 18, 2021",
        },
    },
    {
        name: "PARTICIPATORY RESEARCH. COMMUNITIES IN CHARGE.",
        description:
            "As the Research and Evaluation Director at ITVS, Grace Anglin is helping documentary filmmakers within the public media system measure and understand ways to amplify the impact of their films. In this week's SIP, Grace is going to guide us through a discussion on participatory research.",
        display_date: "11 February 2021",
        start: {
            utc: "February 11, 2021",
        },
        end: {
            utc: "February 11, 2021",
        },
    },
    {
        name: "REPRESENTATION IN ENTREPRENEURSHIP",
        description:
            "Anna Consani is the VP of Community and Strategic Partnerships at Springboard Enterprises. Join us this week for a chat about the importance of female entrepreneurs, incubators and visibility.",
        display_date: "4 February 2021",
        start: {
            utc: "February 4, 2021",
        },
        end: {
            utc: "February 4, 2021",
        },
    },
    {
        name: "FOOD WASTE & CLIMATE CHANGE",
        description:
            "Rose Hartley is the Sustainability Manager at Imperfect Foods, a nationwide e-commerce grocer reimagining grocery delivery for a kinder, less wasteful world. We will talk to Rose about the social changes required to eliminate food waste and build a better food system.",
        display_date: "28 January 2021",
        start: {
            utc: "January 28, 2021",
        },
        end: {
            utc: "January 28, 2021",
        },
    },
    {
        name: "IS M&E A NECESSITY, OR JUST A BURDEN?",
        description:
            "Robyn Hoogendam is a PhD candidate in the School of Public Policy and Administration at Carleton University. Her thesis is concerned with Canadian federal funding accountability requirements and the impact on nonprofit organizations. She will lead the discussion on this week's theme.",
        display_date: "21 January 2021",
        start: {
            utc: "January 21, 2021",
        },
        end: {
            utc: "January 21, 2021",
        },
    },
    {
        name: "HAPPY 2021! NOW WHAT?",
        description:
            "As we tiptoe into 2021, we want to hear how you all are doing, share some SIP updates, and get community feedback as we roll into the new year.",
        display_date: "14 January 2021",
        start: {
            utc: "January 14, 2021",
        },
        end: {
            utc: "January 14, 2021",
        },
    },
    {
        name: "END OF YEAR CELEBRATION WITH KAT & HELKE",
        description:
            "What started as a way to build community during COVID has become a reliably joyful weekly learning experience. Please join us for our last SIP of the year. We'll remind you of what we've all created, and give you a sneak peak into where we are going.",
        display_date: "10 December 2020",
        start: {
            utc: "December 10, 2020",
        },
        end: {
            utc: "December 10, 2020",
        },
    },
    {
        name: "PERSONAL SAFETY & BOUNDARY SETTING",
        description:
            "Linda Leu is the Executive Director and instructor at IMPACT Bay Area, an organization that empowers individuals to resist violence by teaching healthy boundary setting and full-force self-defense. Tune in this week to learn more about Linda's work in the community.",
        display_date: "3 December 2020",
        start: {
            utc: "December 3, 2020",
        },
        end: {
            utc: "December 3, 2020",
        },
    },
    {
        name: "HOW TO HATE (BUT TAKE ACTION ON) PLASTICS",
        description:
            "Co-founder Helke Ramos has a deep-seated hatred of plastic. As we collectively head into high consumption season, Helke will lead the group through a chat about what we can do as consumers to decrease our usage and make more informed choices. Plus, we will look at a few cool ways businesses are affecting change.",
        display_date: "19 November 2020",
        start: {
            utc: "November 19, 2020",
        },
        end: {
            utc: "November 19, 2020",
        },
    },
    {
        name: "NLP MACHINE LEARNING",
        description:
            "Stephen Godfrey, a data science practitioner, will provide a practical, non-technical demonstration of how a class of machine learning tools known as Natural Language Processing (NLP) can be used to extract insights from unstructured text.",
        display_date: "12 November 2020",
        start: {
            utc: "November 12, 2020",
        },
        end: {
            utc: "November 12, 2020",
        },
    },
    {
        name: "EXPLORING COMMUNITY ENGAGEMENT",
        description:
            "Katie Zeisl specializes in inclusive, accessible, and meaningful events and programs that make a difference in society. Join us this week as Katie discusses her experiences, focusing on the ways she's successfully managed virtual engagement.",
        display_date: "5 November 2020",
        start: {
            utc: "November 5, 2020",
        },
        end: {
            utc: "November 5, 2020",
        },
    },
    {
        name: "WHAT ARE SUSTAINABILITY METRICS",
        description:
            "Cassandra Telenkois assesses the environmental impacts of new businesses, and she is also a researcher in sustainable design. She will be talking with us about the importance of metrics and analytics in sustainability.",
        display_date: "29 October 2020",
        start: {
            utc: "October 29, 2020",
        },
        end: {
            utc: "October 29, 2020",
        },
    },
    {
        name: "ADVOCATING FOR THE AMAZON",
        description:
            "Sign in this week to hear from Sophia Pfeifer, a Brazilian lawyer dedicated to the environment. She is especially enthusiastic about researching the relationship between climate justice and the Amazon Forest.",
        display_date: "22 October 2020",
        start: {
            utc: "October 22, 2020",
        },
        end: {
            utc: "October 22, 2020",
        },
    },
    {
        name: "DESTIGMATIZING PERIODS THROUGH COMEDY",
        description:
            "Meg Trowbridge, Kate Elston and Meg Hayes run the podcast Vicious Cycle. As three Bay Area comedians and bleeders, they decided it was time to demystify, bitch about, and laugh at periods. During this happy hour, we're going to chat about sitting through discomfort: discussing menstruation isn't always easy, but it can be funny.",
        display_date: "15 October 2020",
        start: {
            utc: "October 15, 2020",
        },
        end: {
            utc: "October 15, 2020",
        },
    },
    {
        name: "CLIMATE CRISIS DOOM & BLOOM",
        description:
            "Marc O'Brien is the co-founder of The Determined and co-founder of Climate Designers, a hub for designers and creative professionals committed to using their skills to take climate action. Marc will present his perspective on the climate crisis through a design lens.",
        display_date: "8 October 2020",
        start: {
            utc: "October 8, 2020",
        },
        end: {
            utc: "October 8, 2020",
        },
    },
    {
        name: "WILL VOTER TURNOUT DECIDE THE ELECTION",
        description:
            "Mark Mullen is the Founder of Turnout Nation. Their mission is to help raise voter turnout in the U.S. so the government better represents the people. Mark will be leading a discussion on voter turnout, and challenge us to inspire others to make their voices heard.",
        display_date: "1 October 2020",
        start: {
            utc: "October 1, 2020",
        },
        end: {
            utc: "October 1, 2020",
        },
    },
    {
        name: "INCLUSIVITY AT WORK",
        description:
            "Founder of NINON, Andie Washington, is committed to cultivating a sustainable, thriving culture within the workplace. She will be talking this week about how to foster an engaging, inclusive work environment.",
        display_date: "24 September 2020",
        start: {
            utc: "September 24, 2020",
        },
        end: {
            utc: "September 24, 2020",
        },
    },
    {
        name: "DOCUMENTING UNTOLD SOCIAL ISSUE STORIES",
        description:
            "Lisa Tawil is the VP of Marketing and Communications at ITVS, one of the largest co-producers and distributors of independent documentaries. ITVS's mission is to diversify the media landscape by uplifting voices of historically under-represented communities. Lisa will be talking with us about the documentary field, and the opportunities & challenges around impact work in media.",
        display_date: "17 September 2020",
        start: {
            utc: "September 17, 2020",
        },
        end: {
            utc: "September 17, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON EDUCATION DURING COVID",
        description:
            'Terry Godfrey is the Chief Financial and Administrative Officer at the Learning Policy Institute, which has published a new report called, "Restarting and Reinventing School: Learning in the Time of COVID and Beyond." Terry will use this research to highlight education challenges during COVID-19.',
        display_date: "10 September 2020",
        start: {
            utc: "September 10, 2020",
        },
        end: {
            utc: "September 10, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON HEALING THROUGH REVELING",
        description:
            "Joelle Dussek is a former NYC TV/ film/ podcast producer turned SF somatic psychologist. Through the lens of Carnival, she's going to give us a glimpse this week into how to combine the old and new to reveal and heal through reveling.",
        display_date: "3 September 2020",
        start: {
            utc: "September 3, 2020",
        },
        end: {
            utc: "September 3, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON CIRCULAR ECONOMIES",
        description:
            "Dr. Julio Campos, ecological economist, will steer a conversation on doughnut economics, including the relationship between circular economies and economic development, the role of consumers, and challenges to measuring and implementing environmental initiatives.",
        display_date: "27 August 2020",
        start: {
            utc: "August 27, 2020",
        },
        end: {
            utc: "August 27, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON IMPACT INVESTING",
        description:
            "Senior Development Officer at the East Bay Community Foundation (and one of our Advisory Committee members) Christine Lim gives us the scoop this week on impact investing.",
        display_date: "20 August 2020",
        start: {
            utc: "August 20, 2020",
        },
        end: {
            utc: "August 20, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON POLITICS",
        description:
            "This week, Marc Goldstein will talk us through online political campaigns.",
        display_date: "13 August 2020",
        start: {
            utc: "August 13, 2020",
        },
        end: {
            utc: "August 13, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON SUSTAINABLE FASHION",
        description:
            "Aguida Zanol is a multi-disciplinary designer and sustainable product manager from Brazil. She is passionate about the development of sustainable projects and products that combine aspects of the social, environmental and economic. During this SIP, Aguida will discuss regeneration in the fashion industry.",
        display_date: "6 August 2020",
        start: {
            utc: "August 6, 2020",
        },
        end: {
            utc: "August 6, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON ARTIFICIAL INTELLIGENCE",
        description:
            "Our resident community AI specialist, Chidam Raji is going to lead a chat on AI. We will specifically look at applications in healthcare with a focus on medical diagnostics, prognostics, and treatment as well as implications for bias.",
        display_date: "30 July 2020",
        start: {
            utc: "July 30, 2020",
        },
        end: {
            utc: "July 30, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON PROCUREMENT & SOCIAL IMPACT",
        description:
            "Adriana Rita has over 25 years of experience in procurement. Coming to us from Brazil, she will be leading the discussion this week on B2B support, transparency/ ethics, and purpose-driven sourcing.",
        display_date: "16 July 2020",
        start: {
            utc: "July 16, 2020",
        },
        end: {
            utc: "July 16, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON COUNTERFEIT MEDICINE",
        description:
            "Rick Roberts is on the Board of the Partnership for Medicine. A personal experience with counterfeits led to Rick's advocacy journey. Most recently, he testified before Congress on the opioid epidemic. Join Rick this week to talk about black market medicine and COVID scams.",
        display_date: "9 July 2020",
        start: {
            utc: "July 9, 2020",
        },
        end: {
            utc: "July 9, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON DISABILITY RIGHTS",
        description:
            "Darby Morris leads our chat this week on Disability Rights, with a focus on the deaf community. We will also explore how we conceptualize disability, privilege and identity.",
        display_date: "2 July 2020",
        start: {
            utc: "July 2, 2020",
        },
        end: {
            utc: "July 2, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON SUSTAINABILITY",
        description:
            "Sustainability lives at the intersection of economic development, social safety and environmental preservation with a focus on policy and industry change. How can we become more empowered consumers? Is sustainability enough — what about regeneration? And how has COVID-19 catalyzed movement in this area?",
        display_date: "25 June 2020",
        start: {
            utc: "June 25, 2020",
        },
        end: {
            utc: "June 25, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON LABOR EXPLOITATION",
        description:
            "Labor exploitation is often difficult to identify, overlooked or ignored. How can we become more aware of common exploitative practices? What can we expect from businesses, and the government? And where can we find resources to learn more?",
        display_date: "18 June 2020",
        start: {
            utc: "June 18, 2020",
        },
        end: {
            utc: "June 18, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON CORPORATE ACTIVISM",
        description:
            "What should corporate activism look like? How involved do we want or expect a business to be in social change? As a consumer: do you monitor what companies are doing, or prioritize issue areas? How important is brand activism and industry leadership?",
        display_date: "11 June 2020",
        start: {
            utc: "June 11, 2020",
        },
        end: {
            utc: "June 11, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON INDIVIDUAL ACTIVISM",
        description:
            "We are living in the midst of profound social change. Activism comes in many forms. What is your version of activism? What are the barriers to activism? How does personal risk or safety play a part? How do we negotiate becoming activists during a health crisis?",
        display_date: "4 June 2020",
        start: {
            utc: "June 4, 2020",
        },
        end: {
            utc: "June 4, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON THE ARTS",
        description:
            "The arts are an essential component of culture. What are you doing to stay entertained during lockdown? What measures would need to be in place for you to attend an event? How can we preserve cultural spaces and creativity? What can we do to support our local artists and venues?",
        display_date: "28 May 2020",
        start: {
            utc: "May 28, 2020",
        },
        end: {
            utc: "May 28, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON HEALTH & SAFETY",
        description:
            "Many of our health or safety habits have changed since the lockdown. Has being at home shifted your behaviors or altered your physical or mental health? Have shifting healthcare policies affected your perception of care or treatment? Are there ways we can better ensure the health & safety of those in the community?",
        display_date: "21 May 2020",
        start: {
            utc: "May 21, 2020",
        },
        end: {
            utc: "May 21, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON COMMS & ENGAGEMENT",
        description:
            "Limited in-person contact is having a profound effect on what it means to socialize. While online communities and virtual programming are opening access to people and places that may not have been accessible before, not everyone is able to tap into these resources. What are some ways to ensure inclusion and equity?",
        display_date: "14 May 2020",
        start: {
            utc: "May 14, 2020",
        },
        end: {
            utc: "May 14, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON THE FUTURE OF WORK",
        description:
            'COVID-19 has altered the where, what and how of work. Remote working has shifted recruiting, training, productivity, and communication — arguably, forever. Those who continue to work face health consequences, as the debate over what we mean by "essential" and people are struggling to pay their bills. How have our relationships to work (and technology) changed?',
        display_date: "7 May 2020",
        start: {
            utc: "May 7, 2020",
        },
        end: {
            utc: "May 7, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON FEELING STUCK",
        description:
            'Most of us are currently re-negotiating our daily routines and mental health, to varying degrees of success. Even for those of us who are accustomed to freelancing and unconventional workweeks, the current version of normal seems a bit surreal. Are you feeling mentally "stuck"? And how do we get... unstuck?',
        display_date: "30 April 2020",
        start: {
            utc: "April 30, 2020",
        },
        end: {
            utc: "April 30, 2020",
        },
    },
    {
        name: "A HAPPY HOUR ON FOOD",
        description:
            "COVID-19 has affected the production, distribution and access of our entire food supply chain. People are hungry, and food banks are stretched thin while food dumping (or culling) practices grow in an effort to stay in business. What is to be done about all this waste?",
        display_date: "23 April 2020",
        start: {
            utc: "April 23, 2020",
        },
        end: {
            utc: "April 23, 2020",
        },
    },
];
