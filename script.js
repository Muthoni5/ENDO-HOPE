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
        type: "specialist",
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
        type: "specialist",
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
        type: "specialist",
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
                ${resource.type}
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
                resource.type === selectedType;


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
    document.querySelectorAll(
        "[data-care-filter]"
    );


careCategoryButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const selectedFilter =
                button.dataset.careFilter;


            /*
             * Set the directory filter
             */

            if (careType) {

                careType.value =
                    selectedFilter;

            }


            /*
             * Clear the search box
             */

            if (careSearch) {

                careSearch.value = "";

            }


            /*
             * Update the results
             */

            filterCareResources();


            /*
             * Scroll to the directory
             */

            const directory =
                document.querySelector(
                    ".directory-section"
                );


            if (directory) {

                directory.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        }

    );

});

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
        title: "\"Getting answers changed everything.\"",

        content: `
            <p>
                After years of searching for answers, receiving
                a diagnosis finally gave her a name for what
                she had been experiencing.
            </p>

            <p>
                The diagnosis did not make the journey disappear,
                but it helped her understand her body and begin
                making informed decisions about her care.
            </p>

            <h3>
                What I wish other women knew
            </h3>

            <p>
                Your journey may take time, but you deserve to
                be listened to and taken seriously.
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