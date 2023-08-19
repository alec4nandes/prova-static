/* OLD PARSING FUNCTIONS:

const fs = require("fs");

function getFullText(arr) {
    async function getMoreInfo(event) {
        const { id } = event,
            token = "WW53EJBKS7EUNU3VAOYP",
            endpoint = `https://www.eventbriteapi.com/v3/events/${id}/description/?token=${token}`,
            data = await fetch(endpoint);
        return { ...event, text: (await data.json()).description };
    }

    const promises = arr.map(getMoreInfo);

    Promise.all(promises).then((data) =>
        fs.writeFile("Output.txt", JSON.stringify(data), (err) => {
            if (err) throw err;
        })
    );
}

function filterData(arr) {
    return arr
        .map((item) => {
            let { id, name, description, url, start, end, venue_id } = item;
            name = name.text;
            description = description.text;
            const display_date = getDate(start.utc);
            return {
                id,
                name,
                description,
                url,
                display_date,
                start,
                end,
                venue_id,
            };
        })
        .sort((a, b) => new Date(b.start.utc) - new Date(a.start.utc));
}

function getDate(utc) {
    const months = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
        d = new Date(utc),
        day = d.getDate(),
        month = months[d.getMonth()],
        year = d.getFullYear();
    return `${day} ${month} ${year}`;
}

END OLD PARSING FUNCTIONS */

module.exports = function () {
    return {
        events: bootcamps,
    };
};

const bootcamps = [
    {
        id: "200175639727",
        name: "Social Innovation Bootcamp: March 2022",
        description:
            "What is Social Innovation, anyway? This course will help you understand the social innovation landscape, and application to your work.",
        url: "https://www.eventbrite.com/e/social-innovation-bootcamp-march-2022-tickets-200175639727",
        display_date: "11 March 2022",
        start: {
            timezone: "America/Los_Angeles",
            local: "2022-03-11T09:00:00",
            utc: "2022-03-11T17:00:00Z",
        },
        end: {
            timezone: "America/Los_Angeles",
            local: "2022-03-11T16:00:00",
            utc: "2022-03-12T00:00:00Z",
        },
        venue_id: null,
        text: '<div>What is Social Innovation, anyway? This course will help you understand the social innovation landscape, and application to your work.</div><div style="margin-top: 20px"><div style="margin: 20px 10px;font-size: 15px;line-height: 22px;font-weight: 400;text-align: left;"><p>At Prova Lab, we believe that creating a space to develop a common language around innovation and risk is the first step to breaking down barriers to social innovation. This course aims to demystify social innovation to increase your efficacy as a social purpose leader and communicate better across sectors to achieve impact. </p><p></p><p><strong>You will learn</strong>:</p><ul><li>How to think like a social innovator and work more effectively across silos — with partners, funders and other social purpose professionals</li><li>Tools, tactics, and resources to help you reduce risk and maximize opportunities for impact</li><li>How to apply innovative thinking make your social purpose work more effective</li></ul><p></p><p><strong>Course participants</strong>:</p><p>Cross-silo learning is an essential part of these courses. Participants include a wide variety of individuals undertaking social change; they may be based in nonprofits, government, foundations, CSR &amp; social impact programs, or social enterprises. We welcome professionals who are curious about: </p><ol><li>understanding how organizations apply innovation in their work; </li><li>creating more effective partnerships by reducing communication barriers; and </li><li>better resourcing their social purpose mission.</li></ol><p></p><p><strong>How we teach</strong>:</p><p>Learn from experienced and respected professionals in the social impact space. We’ve worked with our instructors to develop fun, collaborative, hands-on courses. You’ll meet and collaborate directly with other impact professionals. Throughout the day, you’ll work within the cohort to break down key buzzwords, work through case studies, and get actionable feedback on your ideas through group discussions and break-out sessions. </p><p>Space is limited to ensure that every participant receives individual support.</p><p></p><p><strong>Bootcamp instructor</strong>:</p><p><a href="https://www.linkedin.com/in/rachellozanocastro" target="_blank" rel="nofollow noopener noreferrer">Rachel Lozano Castro</a> is a public good professional in San Diego, California/Tijuana, Mexico. She invests her time and energy where community good and equitable economy meet, which can include social entrepreneurship, placemaking, government upgrades, workforce development and inclusive innovation and investment. She directs University of San Diego’s Brink Small Business Development Center and facilitates learning experiences around bi-national governance, business, social innovation, design thinking, networking, prototyping and social impact measurement. She is a TedX speaker, a small business owner, and co-founder of a few community initiatives like USD’s Tijuana Hub, Normal Heights Women’s Giving Circle and The LCLC Family Impact Fund, which makes small investments in the community as well as a board member of Business for Good San Diego and the bi-national social enterprise, Create Purpose.</p><p></p><p><strong>Very important details:</strong></p><ul><li>TIMEZONE: All courses will be conducted in PST.</li><li>MODE: online. A Zoom link for the event will be sent prior to the session. </li><li>ACCESSIBILITY: Contact us if you have accessibility questions.</li><li>GROUP TICKETS: If you are interested in group tickets (3+) or private instruction, contact us.</li><li>REFUND POLICY: For a full refund, you must cancel at least seven (7) full days before the bootcamp start time (9AM Friday, 11 MARCH 2022).</li><li>SCHOLARSHIP: We reserve one spot in each course for those unable to pay. If you are interested in learning more, contact us.</li></ul></div></div>',
    },
    {
        id: "218921559277",
        name: "Social Impact Bootcamp: February 2022",
        description:
            "How do you operationalize social impact? This course will help you understand how to talk about and structure impact.",
        url: "https://www.eventbrite.com/e/social-impact-bootcamp-february-2022-tickets-218921559277",
        display_date: "25 February 2022",
        start: {
            timezone: "America/Los_Angeles",
            local: "2022-02-25T09:00:00",
            utc: "2022-02-25T17:00:00Z",
        },
        end: {
            timezone: "America/Los_Angeles",
            local: "2022-02-25T16:00:00",
            utc: "2022-02-26T00:00:00Z",
        },
        venue_id: null,
        text: '<div>How do you operationalize social impact? This course will help you understand how to talk about and structure impact.</div><div style="margin-top: 20px"><div style="margin: 20px 10px;font-size: 15px;line-height: 22px;font-weight: 400;text-align: left;"><p>At Prova Lab, we believe that intentional program design is key to de-risking social innovation. This foundational course aims to demystify social impact frameworks and evaluation tactics to increase your efficacy as a social purpose leader and amplify your mission.</p><p> </p><p><strong>You will learn</strong>:</p><ul><li>Underlying principles of social impact &amp; why this matters;</li><li>A range of assessment techniques available to measure impact, and the relationship between social impact and social innovation;</li><li>How to identify and consider the application of social impact principles, assessment techniques and concepts to your own work.</li></ul><p></p><p><strong>Course participants</strong>:</p><p>Cross-silo learning is an essential part of these courses. Participants include a wide variety of individuals undertaking social change; they may be based in nonprofits, government, foundations, CSR &amp; social impact programs, or social enterprises. These courses may be best suited for those undertaking strategy, community or program development, research or M&E work. However, we welcome all professionals who are curious about: </p><ul><li>Understanding how to design, implement and assess social impact; </li><li>Communicating more effectively across silos — with partners, external stakeholders, funders and other social purpose professionals — through a shared understanding of commonly used terminology; </li><li>Better resourcing their social purpose mission.</li></ul><p></p><p><strong>How we teach</strong>:</p><p>Learn from experienced and respected professionals in the social impact space. We’ve worked with our instructors to develop fun, engaging, hands-on courses. You’ll meet and collaborate directly with other impact professionals. Throughout the day, you’ll work within the cohort to break down key buzzwords, work through case studies, and get actionable feedback on your ideas through group discussions and break-out sessions. </p><p>Space is limited to ensure that every participant receives individual support.</p><p></p><p><strong>Bootcamp instructor</strong>:</p><p><a href="https://www.linkedin.com/in/megan-laird-christensen/" target="_blank" rel="nofollow noopener noreferrer">Megan Christensen</a> is a learning designer and facilitator at her education consultancy, <a href="https://www.justexperiment.co/" target="_blank" rel="nofollow noopener noreferrer">Just Experiment</a>. Her social impact experience includes running educational programs at the Colorado-based social impact incubator <a href="http://watson.is/" target="_blank" rel="nofollow noopener noreferrer">Watson Institute</a>, coordinating entrepreneur support at the social entrepreneurship NGO, <a href="https://www.ashoka.org/es-mx" target="_blank" rel="nofollow noopener noreferrer">Ashoka</a> in Mexico, and serving as the Executive Director for the community development non profit <a href="https://www.worldhopecorps.org/" target="_blank" rel="nofollow noopener noreferrer">WorldHope Corps</a>. She believes that the value of social impact education lies in its ability to provide new lenses to see and new tools to use in pursuit of creating a more equitable and sustainable future. </p><p> </p><p><strong>Very important details</strong>:</p><ul><li>TIMEZONE: All courses will be conducted in PST.</li><li>MODE: online. A Zoom link for the event will be sent prior to the session. </li><li>ACCESSIBILITY: Contact us if you have accessibility questions.</li><li>GROUP TICKETS: If you are interested in group tickets (3+) or private instruction, contact us.</li><li>REFUND POLICY: For a full refund, you must cancel at least seven (7) full days before the bootcamp start time (9AM Friday, 25 February 2022).</li><li>SCHOLARSHIP: We reserve one spot in each course for those unable to pay. If you are interested in learning more, contact us.</li></ul></div></div>',
    },
    {
        id: "168975340793",
        name: "Social Impact Bootcamp",
        description:
            "Learn how to assess social purpose initiatives through this foundational four-hour bootcamp on social impact.",
        url: "https://www.eventbrite.com/e/social-impact-bootcamp-tickets-168975340793",
        display_date: "15 October 2021",
        start: {
            timezone: "America/Los_Angeles",
            local: "2021-10-15T09:00:00",
            utc: "2021-10-15T16:00:00Z",
        },
        end: {
            timezone: "America/Los_Angeles",
            local: "2021-10-15T13:00:00",
            utc: "2021-10-15T20:00:00Z",
        },
        venue_id: null,
        text: '<div>Learn how to assess social purpose initiatives through this foundational four-hour bootcamp on social impact.</div><div style="margin-top: 20px"><div style="margin: 20px 10px;font-size: 15px;line-height: 22px;font-weight: 400;text-align: left;"><p>Prova Lab\'s mission is to make social innovation accessible to everyone -- and across the social purpose sector, social impact has become the language used to demonstrate success. In this four-hour intensive course, you will learn about how social impact has evolved into a proactive business, funding and evaluation strategy, this includes: key definitions and concepts, framework and methods.</p><p></p><p>Increasingly, consumers, donors, funders, sponsors (and policymakers) utilize the language of social impact to understand ROI; intrapreneurs and social entrepreneurs integrate social impact into mission-driven business initiatives; and nonprofits have begun using the impact as a component of traditional M&E. Whether you undertake work that requires demonstrating impact (to ask for funding or in building a program), or in evaluating impact, it has become increasingly important to know how to assess social purpose initiatives.</p><p></p><p>This is a foundational course aimed at breaking down jargon and creating a shared understanding through an engaging, collaborative curriculum. We do not promote one specific method of impact measurement; these courses are instead aimed at providing you with a broad understanding of the topic. </p><p></p><p>We’ve built a cross-disciplinary team of instructors with real-world experience who can provide a point of access to social impact. We’ve worked with them to develop fun, engaging, practical courses that include group discussions, break-out sessions, and case studies.</p><p></p><p><strong>You will learn:</strong></p><p>1) Underlying principles of social impact, i.e. transparency, accountability, (why this matters)</p><p>2) A range of assessment techniques available to measure impact, and the relationship between social impact and social innovation</p><p>3) How to identify and consider the application of social impact principles, assessment techniques and concepts to your own work</p><p></p><p>We work with a wide variety of organizations and individuals undertaking social change. This course is for you if you: </p><ul><li>Want to increase your efficacy as a social purpose leader and discover new ways to improve your community.</li></ul><ul><li>Want to connect to other purpose-driven professionals, including those from foundations, nonprofits, government, social impact/ CSR programs as well as social entrepreneurs.</li><p></p></ul><p><strong>Bootcamp Instructor: </strong></p><p><a href="https://www.linkedin.com/in/megan-laird-christensen/" target="_blank" rel="nofollow noopener noreferrer">Megan Christensen</a> is a learning designer and facilitator at her education consultancy, <a href="https://www.justexperiment.co/" target="_blank" rel="nofollow noopener noreferrer">Just Experiment</a>. Her social impact experience includes running educational programs at the Colorado-based social impact incubator <a href="http://watson.is/" target="_blank" rel="nofollow noopener noreferrer">Watson Institute</a>, coordinating entrepreneur support at the social entrepreneurship NGO, <a href="https://www.ashoka.org/es-mx" target="_blank" rel="nofollow noopener noreferrer">Ashoka</a> in Mexico, and serving as the Executive Director for the community development non profit <a href="https://www.worldhopecorps.org/" target="_blank" rel="nofollow noopener noreferrer">WorldHope Corps</a>. She believes that the value of social impact education lies in its ability to provide new lenses to see and new tools to use in pursuit of creating a more equitable and sustainable future. </p><p></p><p><strong>Necessary details</strong>: </p><ul><li>TIME COMMITMENT: Each bootcamp is 4 hours, offered in one day. All courses will be conducted in PST.</li><li>MODE: online, utilizing Zoom. Courses are limited to maximize interaction.</li><li>ACCESSIBILITY: Contact us if you have accessibility questions. </li><li>GROUP TICKETS: If you are interested in group tickets (3+) or private instruction, contact us.</li><li>REFUND POLICY: For a full refund, you must cancel at least seven (7) full days before the bootcamp start time (9AM Friday, 15 October 2021).</li><li>SCHOLARSHIP: We reserve one spot in each course for those unable to pay. If you are interested in learning more, contact us.  </li></ul></div></div>',
    },
    {
        id: "167639818209",
        name: "Social Innovation Bootcamp",
        description:
            "We aim to make social innovation accessible to everyone. This four-hour bootcamp will help you understand the social innovation landscape.",
        url: "https://www.eventbrite.com/e/social-innovation-bootcamp-tickets-167639818209",
        display_date: "1 October 2021",
        start: {
            timezone: "America/Los_Angeles",
            local: "2021-10-01T09:00:00",
            utc: "2021-10-01T16:00:00Z",
        },
        end: {
            timezone: "America/Los_Angeles",
            local: "2021-10-01T13:00:00",
            utc: "2021-10-01T20:00:00Z",
        },
        venue_id: null,
        text: '<div>We aim to make social innovation accessible to everyone. This four-hour bootcamp will help you understand the social innovation landscape.</div><div style="margin-top: 20px"><div style="margin: 20px 10px;font-size: 15px;line-height: 22px;font-weight: 400;text-align: left;"><p>Prova Lab\'s mission is to make social innovation accessible to everyone. In this four-hour intensive course, you will gain an understanding of the landscape in which social innovation is emerging, this includes: key definitions and concepts, framework and methods.</p><p></p><p>There is a push to <em>do better, faster</em> among consumers, business, government and civil society. Alongside that push is the rise of social innovation initiatives, methods, tactics and marketing. This is a foundational course aimed at breaking down jargon and creating a shared understanding through an engaging, collaborative curriculum. We do not promote one specific method of innovation; these courses are instead aimed at providing you with a broad understanding of the topic. </p><p></p><p>We’ve built a cross-disciplinary team of instructors with real-world experience who can provide a point of access to social innovation. We’ve worked with them to develop fun, engaging, practical courses that include group discussions, break-out sessions, and case studies.</p><p></p><p><strong>You will learn</strong>:</p><p>1) Prevailing innovation thinking approaches</p><p>2) A range of available tools and tactics that aim to reduce risk in social innovation (and their limitations)</p><p>3) How to identify and apply innovative thinking and social impact concepts to your own work</p><p></p><p>We work with a wide variety of organizations and individuals undertaking social change. This course is for you if you:</p><ul><li>Want to increase your efficacy as a social purpose leader and discover new ways to improve your community.</li></ul><ul><li>Want to connect to other purpose-driven professionals, including those from foundations, nonprofits, government, social impact/ CSR programs as well as social entrepreneurs.</li></ul><p></p><p><strong>Bootcamp Instructor: </strong></p><p><a href="https://www.linkedin.com/in/rachellozanocastro" target="_blank" rel="nofollow noopener noreferrer">Rachel Lozano Castro</a> is a public good professional in San Diego, California/Tijuana, Mexico. She invests her time and energy where community good and equitable economy meet, which can include social entrepreneurship, placemaking, government upgrades, workforce development and inclusive innovation and investment. She directs University of San Diego’s Brink Small Business Development Center and facilitates learning experiences around bi-national governance, business, social innovation, design thinking, networking, prototyping and social impact measurement. She is a TedX speaker, a small business owner, and co-founder of a few community initiatives like USD’s Tijuana Hub, Normal Heights Women’s Giving Circle and The LCLC Family Impact Fund, which makes small investments in the community as well as a board member of Business for Good San Diego and the bi-national social enterprise, Create Purpose.</p><p></p><p><strong>Necessary details: </strong></p><ul><li>TIME COMMITMENT: Each bootcamp is 4 hours, offered in one day. All courses will be conducted in PST.</li><li>MODE: online, utilizing Zoom. Courses are limited to maximize interaction.</li><li>ACCESSIBILITY: Contact us if you have accessibility questions. </li><li>GROUP TICKETS: If you are interested in group tickets (3+) or private instruction, contact us.</li><li>REFUND POLICY: For a full refund, you must cancel at least seven (7) full days before the bootcamp start time (9AM Friday, 1 October 2021).</li><li>SCHOLARSHIP: We reserve one spot in each course for those unable to pay. If you are interested in learning more, contact us.  </li></ul><p></p></div></div>',
    },
];
