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
        title: "\"I thought the pain was normal.\"",

        content: `
            <p>
                For years, she believed that severe period pain
                was simply something she had to live with.
            </p>

            <p>
                The pain affected school, work and everyday life,
                but because she had been told that painful periods
                were normal, she did not initially know that she
                could ask for more answers.
            </p>

            <h3>
                What I wish I knew earlier
            </h3>

            <p>
                Pain that repeatedly interferes with your daily
                life deserves attention. Asking questions about
                your health is not asking for too much.
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
        title: "\"I learned to listen to my body.\"",

        content: `
            <p>
                Her journey taught her that understanding her
                body was an important part of living with
                endometriosis.
            </p>

            <p>
                She began asking more questions, seeking support
                and learning how to communicate her experiences
                more clearly.
            </p>

            <h3>
                What I want other Warriors to know
            </h3>

            <p>
                You know your experience. Do not be afraid to
                speak about it and seek the support you need.
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