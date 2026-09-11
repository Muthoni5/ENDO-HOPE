/* ---------- Share Your Story Form ---------- */

const storyForm = document.getElementById("storyForm");

if (storyForm) {

    storyForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const formMessage =
            document.getElementById("formMessage");

        formMessage.textContent =
            "Thank you for trusting ENDO HOPE with your story. " +
            "This demo form does not send or store submissions yet.";

        formMessage.style.color = "#6f294f";

        storyForm.reset();

    });

}
/* ---------- Care Directory ---------- */

const careSearch =
    document.getElementById("careSearch");

const careType =
    document.getElementById("careType");

const careResults =
    document.getElementById("careResults");

const noResults =
    document.getElementById("noResults");


const careResources = [

    {
        name: "The Hem Practice",

        types: [
            "specialist"
        ],

        county: "Kiambu",

        location: "Thika",

        services:
            "OBGYN & Laparoscopic Surgery; Endometriosis Care",

        phone:
            "+254 792 477 263",

        website:
            "",

        verified:
            "Information supplied for ENDO HOPE directory — verification pending"
    },


    {
        name: "3rd Park Hospital",

        types: [
            "hospital",
            "specialist"
        ],

        county: "Nairobi",

        location: "Parklands, Nairobi",

        services:
            "Endometriosis diagnosis & treatment; Gynaecology; Laparoscopic surgery",

        phone:
            "+254 730 819 900",

        website:
            "https://3rdparkhospital.com/",

        verified:
            "Official hospital information checked August 2026"
    },


    {
        name: "Aga Khan University Hospital, Nairobi",

        types: [
            "hospital",
            "specialist"
        ],

        county: "Nairobi",

        location: "Parklands, Nairobi",

        services:
            "Gynaecology; Endometriosis care; Laparoscopy; Hysteroscopy",

        phone:
            "+254 711 092 876",

        website:
            "https://hospitals.aku.edu/nairobi/",

        verified:
            "Official hospital information checked August 2026"
    }

];



function displayCareResources(resources) {

    careResults.innerHTML = "";


    if (resources.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    resources.forEach(function(resource) {

        const card =
            document.createElement("article");

        card.className = "resource-card";


        card.innerHTML = `

            <span class="resource-type">
    ${resource.types
        .map(function(type) {

            if (type === "hospital") {
                return "Healthcare Facility";
            }

            if (type === "specialist") {
                return "Specialist";
            }

            if (type === "diagnostics") {
                return "Diagnostics";
            }

            if (type === "pharmacy") {
                return "Medication & Pharmacy";
            }

            if (type === "support") {
                return "Community Support";
            }

            return type;

        })
        .join(" • ")
    }
</span>


            <h3>
                ${resource.name}
            </h3>


            <div class="resource-location">

                📍 ${resource.location},
                ${resource.county} County

            </div>


            <p>
                <strong>Services</strong><br>

                ${resource.services}
            </p>


            ${
                resource.phone
                ?
                `
                <p class="resource-contact">

                    📞

                    <a href="tel:${resource.phone}">
                        ${resource.phone}
                    </a>

                </p>
                `
                :
                ""
            }


            ${
                resource.website
                ?
                `
                <a
                    href="${resource.website}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="resource-link"
                >
                    Visit Website →
                </a>
                `
                :
                ""
            }


            <div class="resource-status">

                ✓ ${resource.verified}

            </div>

        `;


        careResults.appendChild(card);

    });

}


function filterCareResources() {

    const searchTerm =
        careSearch.value
            .toLowerCase()
            .trim();


    const selectedType =
        careType.value;


    const filteredResources =
        careResources.filter(function(resource) {

            const searchableText = (

    resource.name +
    " " +
    resource.county +
    " " +
    resource.location +
    " " +
    resource.services

).toLowerCase();


            const matchesSearch =
                searchableText.includes(searchTerm);


            const matchesType =
                selectedType === "all" ||
                resource.types.includes(selectedType);


            return (
                matchesSearch &&
                matchesType
            );

        });


    displayCareResources(
        filteredResources
    );

}


if (careSearch && careType) {

    careSearch.addEventListener(
        "input",
        filterCareResources
    );

    careType.addEventListener(
        "change",
        filterCareResources
    );


    displayCareResources(
        careResources
    );

}
/* ---------- Care Category Buttons ---------- */

const careCategoryButtons =
    document.querySelectorAll("[data-care-filter]");

careCategoryButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        event.preventDefault();

        const selectedFilter =
            button.dataset.careFilter;

        /*
         * Set the directory filter
         */

        if (careType) {
            careType.value = selectedFilter;
        }

        /*
         * Clear the search box
         */

        if (careSearch) {
            careSearch.value = "";
        }

        /*
         * Display the filtered resources
         */

        filterCareResources();

        /*
         * Find the Care Directory
         */

        const directory =
            document.querySelector(".directory-section");

        if (directory) {

            window.scrollTo({
                top: directory.offsetTop - 100,
                behavior: "smooth"
            });

        }

    });

});
/* ---------- Care Directory URL Filter ---------- */

const careURLParams =
    new URLSearchParams(window.location.search);

const URLCareType =
    careURLParams.get("type");


if (
    careType &&
    URLCareType
) {

    careType.value = URLCareType;

    filterCareResources();

}




/* ---------- Suggest a Resource ---------- */

const resourceForm =
    document.getElementById("resourceForm");


if (resourceForm) {

    resourceForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const name =
                document.getElementById(
                    "resourceName"
                ).value.trim();


            const category =
                document.getElementById(
                    "resourceCategory"
                ).value;


            const county =
                document.getElementById(
                    "resourceCounty"
                ).value.trim();


            const location =
                document.getElementById(
                    "resourceLocation"
                ).value.trim();


            const services =
                document.getElementById(
                    "resourceServices"
                ).value.trim();


            const contact =
                document.getElementById(
                    "resourceContact"
                ).value.trim();


            const notes =
                document.getElementById(
                    "resourceNotes"
                ).value.trim();


            const message =

                `Hello ENDO HOPE,

I would like to suggest a resource for the ENDO HOPE care directory.

Resource: ${name}

Category: ${category}

County: ${county}

Location: ${location}

Services:
${services}

Contact information:
${contact}

Additional information:
${notes}

I understand that the information will be reviewed before being added to the directory.`;


            const whatsappURL =
                "https://wa.me/254713558069?text="
                +
                encodeURIComponent(message);


            window.open(
                whatsappURL,
                "_blank"
            );

        }
    );

}
// ==========================================
// ENDO WARRIORS STORIES
// ==========================================

const storyButtons = document.querySelectorAll(".story-button");
const storyModal = document.getElementById("story-modal");
const storyClose = document.getElementById("story-close");
const storyTitle = document.getElementById("story-title");
const storyLabel = document.getElementById("story-label");
const storyContent = document.getElementById("story-content");



const stories = {

    "story-1": {
        label: "WARRIOR STORY 01",
        title: "\"The Pain Nobody Could See\"",

        content: `
            <p>
                For a long time, I became very good at pretending
                I was okay.
            </p>

            <p>
                I learned how to smile when I was in pain. I learned
                how to attend work, attend family gatherings and meet
                friends while quietly counting the minutes until I
                could go home and lie down.
            </p>

            <p>
                People around me often saw a woman who was functioning.
                They didn't see everything it took to get through the day.
            </p>

            <p>
                My periods were difficult, but what confused me most
                was how unpredictable my body could be. There were days
                when I felt completely fine, and then suddenly the pain
                would come and take over everything.
            </p>

            <p>
                Sometimes I cancelled plans. Sometimes I struggled to
                concentrate at work. Sometimes I simply wanted everyone
                to leave me alone because explaining how I felt was more
                exhausting than the pain itself.
            </p>

            <p>
                The hardest part wasn't always the physical pain.
            </p>

            <p>
                It was hearing things like, <em>"Maybe you're just
                stressed."</em>
            </p>

            <p>
                Or, <em>"All women experience period pain."</em>
            </p>

            <p>
                After hearing those things enough times, I started
                questioning myself.
            </p>

            <p>
                Was I exaggerating? Was I being weak? Was this really
                something I just needed to learn to live with?
            </p>

            <p>
                Eventually, I realised that constantly struggling did
                not make me weak. It meant that something deserved
                attention.
            </p>

            <p>
                Seeking medical help became an important part of my
                journey. I began asking more questions, learning about
                my body and trying to understand what was happening
                rather than simply enduring it.
            </p>

            <h3>
                What My Journey Taught Me
            </h3>

            <p>
                My journey with endometriosis has taught me that an
                illness does not have to be visible for it to be real.
            </p>

            <p>
                There are women going to work while experiencing pain.
                There are women caring for their families while
                struggling. There are women cancelling plans because
                their bodies simply will not cooperate.
            </p>

            <p>
                And there are women who have become experts at saying
                <strong>"I'm fine"</strong> when they are anything
                but fine.
            </p>

            <p>
                I share my story because I want women to know that
                they don't have to be ashamed of asking questions
                about their health.
            </p>

            <p>
                You know your body. If something doesn't feel right,
                it deserves to be taken seriously.
            </p>

            <p>
                I am still learning, still navigating my journey and
                still discovering what living with endometriosis means
                for me.
            </p>

            <p>
                But I no longer believe that I have to suffer silently.
            </p>

            <p>
                <strong>
                    My pain may not always be visible, but my experience
                    is real.
                </strong>
            </p>

            <p>
                And I am an <strong>ENDO WARRIOR.</strong>
            </p>
        `
    },


   "story-2": {
        label: "WARRIOR STORY 02",
        title: "\"My Journey: From Period Pain to an Endometriosis Diagnosis.\"",

        content: `
            <p>
                My endometriosis journey began long before I knew what endometriosis was.

At 13 years old, I started experiencing period pain.

At first, the symptoms were inconsistent. Some months were worse than others, and I didn't understand why. But the pain was there, and as the years went by, it began to feel like something I would simply have to live with.

By the time I was 19, the pain had affected much more than just my periods.

It affected how I saw myself, how I felt about being a woman, and how I imagined my future. There were times when the pain made me resent so many things. I began to wonder if this was simply what being a woman meant for me — to experience pain over and over again, with no real end in sight.
            </p>

            <p>
                Then, at 19, I finally received a diagnosis of endometriosis at Lusigetti Hospital.

For the first time, there was a name for what I had been experiencing.

But getting a diagnosis did not mean the journey was over.

At that point, we did not know much about the disease. We believed medication and painkillers would be enough to help me manage the pain. And for a while, they did.

But gradually, they became less effective.

The pain continued to be part of my life, and I began to understand that this was not something that could simply be ignored or treated with painkillers forever.

Years later, in 2026, my journey has brought me to another stage of this disease: deep infiltrating endometriosis (DIE).

The disease has progressed and spread, and I continue to navigate what that means for my body and my life.
            </p>
            <p>
            Throughout this journey, I have also had the support and care of my doctor, Dr. Murithi from HEM Practice, who has been part of my medical journey.

Looking back, one of the things I wish I had known much earlier is that period pain should not simply be dismissed as something every woman has to endure.

Pain that interferes with your life deserves attention.

Pain that keeps coming back deserves to be investigated.

And women deserve to be listened to.

I am sharing my story because I do not want another 13-year-old girl to grow up believing that severe period pain is simply something she has to accept.

I do not want another young woman to spend years wondering why her body hurts and whether anyone will believe her.

Period pain is not something we should automatically normalise.

Through ENDO HOPE, I want to help create awareness, share reliable information, encourage women to seek appropriate medical care, and remind women living with endometriosis that they are not alone.

If you are living with this disease, your pain is real. Your experience matters. And you deserve to be heard.</p>
            <h3>
                This is my story.
            </h3>

            <p>
                And this is why I am an ENDO WARRIOR.

Let's spread awareness. Let's educate ourselves. Let's support one another. And let's come through for women who are suffering.
            </p>
        `
    },



"story-3": {
    label: "WARRIOR STORY 03",
    title: "\"I learned to speak up for myself.\"",

    content: `
        <p>
            There was a time when I stopped asking questions about
            my health because I was afraid of being told that nothing
            was wrong.
        </p>

        <p>
            I had appointments where I struggled to explain what I
            was experiencing. Sometimes I forgot the questions I had
            planned to ask. Other times, I left wondering whether I
            had explained myself clearly enough.
        </p>

        <p>
            I began writing things down before my appointments.
            I recorded when the pain happened, how long it lasted,
            how it affected my daily activities and the questions
            I wanted answered.
        </p>

        <p>
            It may seem like a small thing, but it changed the way
            I approached my healthcare.
        </p>

        <p>
            I realised that I didn't have to feel embarrassed about
            asking for an explanation. I didn't have to pretend that
            I understood everything. And I didn't have to accept
            feeling unheard as the end of the conversation.
        </p>

        <h3>
            Finding My Voice
        </h3>

        <p>
            Learning about endometriosis also helped me understand
            my own experience differently.
        </p>

        <p>
            I started asking questions instead of quietly accepting
            uncertainty. I started preparing for appointments instead
            of hoping I would remember everything in the moment.
        </p>

        <p>
            Most importantly, I learned that advocating for myself
            was not being difficult.
        </p>

        <p>
            It was taking my health seriously.
        </p>

        <p>
            My journey is still ongoing. I don't have every answer,
            and some days are harder than others. But I no longer
            feel that I have to stay silent just because I am unsure
            of what to say.
        </p>

        <p>
            If you are struggling to explain what you are experiencing,
            write it down. Ask questions. Take someone you trust with
            you if that helps.
        </p>

        <p>
            Your questions are valid, and your experience deserves
            to be heard.
        </p>

        <p>
            <strong>
                I am learning to trust my voice, ask for answers and
                advocate for myself.
            </strong>
        </p>

        <p>
            And I am an <strong>ENDO WARRIOR.</strong>
        </p>
    `
    }

};

storyButtons.forEach(button => {

    button.addEventListener("click", () => {

        const storyId = button.dataset.story;
        const story = stories[storyId];

        if (!story) {
            return;
        }


        storyLabel.textContent = story.label;
        storyTitle.textContent = story.title;
        storyContent.innerHTML = story.content;


        storyModal.classList.add("active");

        storyModal.setAttribute("aria-hidden", "false");

    });

});


storyClose.addEventListener("click", () => {

    storyModal.classList.remove("active");

    storyModal.setAttribute("aria-hidden", "true");

});


storyModal.addEventListener("click", (event) => {

    if (event.target === storyModal) {

        storyModal.classList.remove("active");

        storyModal.setAttribute("aria-hidden", "true");

    }

});