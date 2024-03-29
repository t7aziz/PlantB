// Sample JSON data directly embedded for demonstration
// You might want to keep it external but prepare for a fallback
var plantsData = [
    {
      "plantId": "malus-pumila",
      "name": "Apple",
      "description": "An apple is a sweet, edible fruit produced by an apple tree (Malus pumila). Apple trees are cultivated worldwide, and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe, and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek and European Christian traditions.<br><br>Apple trees are large if grown from seed. Generally apple cultivars are propagated by grafting onto rootstocks, which control the size of the resulting tree. There are more than 7,500 known cultivars of apples, resulting in a range of desired characteristics. Different cultivars are bred for various tastes and uses, including cooking, eating raw and cider production. Trees and fruit are prone to a number of fungal, bacterial and pest problems, which can be controlled by a number of organic and non-organic means. In 2010, the fruit's genome was sequenced as part of research on disease control and selective breeding in apple production.<br><br>Worldwide production of apples in 2014 was 84.6 million tonnes, with China accounting for 48% of the total.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Apple\">Wikipedia</a>)",
      "growZoneNumber": 3,
      "wateringInterval": 30,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/55/Apple_orchard_in_Tasmania.jpg"
    },
    {
      "plantId": "beta-vulgaris",
      "name": "Beet",
      "description": "The beetroot is the taproot portion of the beet plant, usually known in North America as the beet and also known as the table beet, garden beet, red beet, or golden beet. It is one of several of the cultivated varieties of Beta vulgaris grown for their edible taproots and their leaves (called beet greens). These varieties have been classified as B. vulgaris subsp. vulgaris Conditiva Group.<br><br>Other than as a food, beets have use as a food colouring and as a medicinal plant. Many beet products are made from other Beta vulgaris varieties, particularly sugar beet.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Beetroot\">Wikipedia</a>)",
      "growZoneNumber": 2,
      "wateringInterval": 7,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/29/Beetroot_jm26647.jpg"
    },
    {
      "plantId": "coriandrum-sativum",
      "name": "Cilantro",
      "description": "Coriander, also known as cilantro or Chinese parsley, is an annual herb in the family Apiaceae. All parts of the plant are edible, but the fresh leaves and the dried seeds are the parts most traditionally used in cooking.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Coriander\">Wikipedia</a>)",
      "growZoneNumber": 2,
      "wateringInterval": 2,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/5/51/A_scene_of_Coriander_leaves.JPG"
    },
    {
      "plantId": "solanum-lycopersicum",
      "name": "Tomato",
      "description": "The tomato is the edible, often red, berry of the nightshade Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America. The Nahuatl (Aztec language) word tomatl gave rise to the Spanish word tomate, from which the English word tomato derived. Its use as a cultivated food may have originated with the indigenous peoples of Mexico. The Spanish encountered the tomato from their contact with the Aztec during the Spanish colonization of the Americas and brought it to Europe. From there, the tomato was introduced to other parts of the European-colonized world during the 16th century.<br><br>The tomato is consumed in diverse ways, raw or cooked, in many dishes, sauces, salads, and drinks. While tomatoes are fruits – botanically classified as berries – they are commonly used as a vegetable ingredient or side dish.<br><br>Numerous varieties of the tomato plant are widely grown in temperate climates across the world, with greenhouses allowing for the production of tomatoes throughout all seasons of the year. Tomato plants typically grow to 1–3 meters (3–10 ft) in height. They are vines that have a weak stem that sprawls and typically needs support. Indeterminate tomato plants are perennials in their native habitat, but are cultivated as annuals. Determinate, or bush, plants are annuals that stop growing at a certain height and produce a crop all at once. The size of the tomato varies according to the cultivar, with a range of 0.5–4 inches (1.3–10.2 cm) in width.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Tomato\">Wikipedia</a>)",
      "growZoneNumber": 9,
      "wateringInterval": 4,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/17/Cherry_tomatoes_red_and_green_2009_16x9.jpg"
    },
    {
      "plantId": "persea-americana",
      "name": "Avocado",
      "description": "The avocado (Persea americana) is a tree, long thought to have originated in South Central Mexico, classified as a member of the flowering plant family Lauraceae. The fruit of the plant, also called an avocado (or avocado pear or alligator pear), is botanically a large berry containing a single large seed.<br><br>Avocados are commercially valuable and are cultivated in tropical and Mediterranean climates throughout the world. They have a green-skinned, fleshy body that may be pear-shaped, egg-shaped, or spherical. Commercially, they ripen after harvesting. Avocado trees are partially self-pollinating and are often propagated through grafting to maintain a predictable quality and quantity of the fruit.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Avocado\">Wikipedia</a>)",
      "growZoneNumber": 9,
      "wateringInterval": 3,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e4/Branch_and_fruit_of_the_Maluma_avocado_cultivar.jpg"
    },
    {
      "plantId": "pyrus-communis",
      "name": "Pear",
      "description": "The pear tree and shrub are a species of genus Pyrus, in the family Rosaceae, bearing the pomaceous fruit of the same name. Several species of pear are valued for their edible fruit and juices while others are cultivated as trees.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Pear\">Wikipedia</a>)",
      "growZoneNumber": 3,
      "wateringInterval": 30,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/13/More_pears.jpg"
    },
    {
      "plantId": "solanum-melongena",
      "name": "Eggplant",
      "description": "Eggplant (US), aubergine (UK), or brinjal (South Asia and South Africa) is a plant species in the nightshade family Solanaceae, Solanum melongena, grown for its often purple edible fruit.<br><br>The spongy, absorbent fruit of the plant is widely used in cooking in many different cuisines, and is often considered a vegetable, even though it is a berry by botanical definition. As a member of the genus Solanum, it is related to the tomato and the potato. Like the tomato, its skin and seeds can be eaten, but, like the potato, it is not advisable to eat it raw. Eggplant supplies low contents of macronutrients and micronutrients. The capability of the fruit to absorb oils and flavors into its flesh through cooking is well known in the culinary arts.<br><br>It was originally domesticated from the wild nightshade species thorn or bitter apple, S. incanum, probably with two independent domestications: one in South Asia, and one in East Asia.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Eggplant\">Wikipedia</a>)",
      "growZoneNumber": 4,
      "wateringInterval": 3,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Eggplant_display.JPG"
    },
    {
      "plantId": "vitis-vinifera",
      "name": "Grape",
      "description": "A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis.<br><br>Grapes can be eaten fresh as table grapes or they can be used for making wine, jam, juice, jelly, grape seed extract, raisins, vinegar, and grape seed oil. Grapes are a non-climacteric type of fruit, generally occurring in clusters.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Grape\">Wikipedia</a>)",
      "growZoneNumber": 9,
      "wateringInterval": 9,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/0/03/Grape_Plant_and_grapes9.jpg"
    },
    {
      "plantId": "mangifera-indica",
      "name": "Mango",
      "description": "Mangoes are juicy stone fruit (drupe) from numerous species of tropical trees belonging to the flowering plant genus Mangifera, cultivated mostly for their edible fruit.<br><br>The majority of these species are found in nature as wild mangoes. The genus belongs to the cashew family Anacardiaceae. Mangoes are native to South Asia, from where the 'common mango' or 'Indian mango', Mangifera indica, has been distributed worldwide to become one of the most widely cultivated fruits in the tropics. Other Mangifera species (e.g. horse mango, Mangifera foetida) are grown on a more localized basis.<br><br>It is the national fruit of India, Pakistan, and the Philippines, and the national tree of Bangladesh.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Mango\">Wikipedia</a>)",
      "growZoneNumber": 11,
      "wateringInterval": 7,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/67/Mangos_criollos_y_pera.JPG"
    },
    {
      "plantId": "citrus-x-sinensis",
      "name": "Orange",
      "description": "The orange is the fruit of the citrus species Citrus × sinensis in the family Rutaceae. It is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange. The sweet orange reproduces asexually (apomixis through nucellar embryony); varieties of sweet orange arise through mutations.<br><br>The orange is a hybrid between pomelo (Citrus maxima) and mandarin (Citrus reticulata). The chloroplast genome, and therefore the maternal line, is that of pomelo. The sweet orange has had its full genome sequenced.<br><br>Sweet oranges were mentioned in Chinese literature in 314 BC. As of 1987, orange trees were found to be the most cultivated fruit tree in the world. Orange trees are widely grown in tropical and subtropical climates for their sweet fruit. The fruit of the orange tree can be eaten fresh, or processed for its juice or fragrant peel. As of 2012, sweet oranges accounted for approximately 70% of citrus production.<br><br>In 2014, 70.9 million tonnes of oranges were grown worldwide, with Brazil producing 24% of the world total followed by China and India.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Orange_(fruit)\">Wikipedia</a>)",
      "growZoneNumber": 9,
      "wateringInterval": 30,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/2/22/Apfelsinenbaum--Orange_tree.jpg"
    },
    {
      "plantId": "helianthus-annuus",
      "name": "Sunflower",
      "description": "Roses are red<br>Violets are blue<br>Sunflowers have seeds<br>That folks love to chew<br><br>- M.G., 2018<br><br>Helianthus annuus, the common sunflower, is a large annual forb of the genus Helianthus grown as a crop for its edible oil and edible fruits. This sunflower species is also used as wild bird food, as livestock forage (as a meal or a silage plant), in some industrial applications, and as an ornamental in domestic gardens. The plant was first domesticated in the Americas. Wild Helianthus annuus is a widely branched annual plant with many flower heads. The domestic sunflower, however, often possesses only a single large inflorescence (flower head) atop an unbranched stem. The name sunflower may derive from the flower's head's shape, which resembles the sun, or from the impression that the blooming plant appears to slowly turn its flower towards the sun as the latter moves across the sky on a daily basis.<br><br>Sunflower seeds were brought to Europe from the Americas in the 16th century, where, along with sunflower oil, they became a widespread cooking ingredient.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Helianthus_annuus\">Wikipedia</a>)",
      "growZoneNumber": 8,
      "wateringInterval": 3,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sunflowers_in_field_flower.jpg"
    },
    {
      "plantId": "citrullus-lanatus",
      "name": "Watermelon",
      "description": "Citrullus lanatus is a plant species in the family Cucurbitaceae, a vine-like (scrambler and trailer) flowering plant originating in West Africa. It is cultivated for its fruit. The subdivision of this species into two varieties, watermelons (Citrullus lanatus (Thunb.) var. lanatus) and citron melons (Citrullus lanatus var. citroides (L. H. Bailey) Mansf.), originated with the erroneous synonymization of Citrullus lanatus (Thunb.) Matsum. & Nakai and Citrullus vulgaris Schrad. by L.H. Bailey in 1930. Molecular data including sequences from the original collection of Thunberg and other relevant type material, show that the sweet watermelon (Citrullus vulgaris Schrad.) and the bitter wooly melon Citrullus lanatus (Thunb.) Matsum. & Nakai are not closely related to each other. Since 1930, thousands of papers have misapplied the name Citrullus lanatus (Thunb.) Matsum. & Nakai for the watermelon, and a proposal to conserve the name with this meaning was accepted by the relevant nomenclatural committee and confirmed at the International Botanical Congress in Shenzhen.<br><br>The bitter South African melon first collected by Thunberg has become naturalized in semiarid regions of several continents, and is designated as a 'pest plant' in parts of Western Australia where they are called pig melon.<br><br>Watermelon (Citrullus lanatus) is a scrambling and trailing vine in the flowering plant family Cucurbitaceae. The species was long thought to have originated in southern Africa, but this was based on the erroneous synonymization by L. H. Bailey (1930) of a South African species with the cultivated watermelon. The error became apparent with DNA comparison of material of the cultivated watermelon seen and named by Linnaeus and the holotype of the South African species. There is evidence from seeds in Pharao tombs of watermelon cultivation in Ancient Egypt. Watermelon is grown in tropical and subtropical areas worldwide for its large edible fruit, also known as a watermelon, which is a special kind of berry with a hard rind and no internal division, botanically called a pepo. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties have been cultivated. The fruit can be eaten raw or pickled and the rind is edible after cooking.<br><br>Considerable breeding effort has been put into disease-resistant varieties. Many cultivars are available that produce mature fruit within 100 days of planting the crop.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Watermelon\">Wikipedia</a>)",
      "growZoneNumber": 7,
      "wateringInterval": 3,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/f/fc/01266jfWatermelons_Philippines_textures_Apolonio_Samson_Market_Quezon_Cityfvf_02.jpg"
    },
    {
      "plantId": "hibiscus-rosa-sinensis",
      "name": "Hibiscus",
      "description": "Hibiscus is a genus of flowering plants in the mallow family, Malvaceae. The genus is quite large, comprising several hundred species that are native to warm temperate, subtropical and tropical regions throughout the world. Member species are renowned for their large, showy flowers and those species are commonly known simply as 'hibiscus', or less widely known as rose mallow. There are also names for hibiscus such as hardy hibiscus, rose of sharon, and tropical hibiscus.<br><br>The genus includes both annual and perennial herbaceous plants, as well as woody shrubs and small trees. The generic name is derived from the Greek name ἰβίσκος (hibiskos) which Pedanius Dioscorides gave to Althaea officinalis (c. 40–90 AD).<br><br>Several species are widely cultivated as ornamental plants, notably Hibiscus syriacus and Hibiscus rosa-sinensis.<br><br>A tea made from hibiscus flowers is known by many names around the world and is served both hot and cold. The beverage is known for its red colour, tart flavour, and vitamin C content.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Hibiscus\">Wikipedia</a>)",
      "growZoneNumber": 10,
      "wateringInterval": 1,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/8/82/Hibiscus_rosa-sinensis_flower_2.JPG"
    },
    {
      "plantId": "cypripedium-reginae",
      "name": "Pink & White Lady's Slipper",
      "description": "Cypripedium reginae, known as the showy lady's slipper, pink-and-white lady's-slipper, or the queen's lady's-slipper, is a rare terrestrial lady's-slipper orchid native to northern North America.<br><br>It is the state flower of Minnesota, United States, and the provincial flower of Prince Edward Island, Canada.<br><br>Despite producing a large amount of seeds per seed pod, it reproduces largely by vegetative reproduction, and remains restricted to the North East region of the United States and south east regions of Canada. Although never common, this rare plant has vanished from much of its historical range due to habitat loss. It has been a subject of horticultural interest for many years with Charles Darwin who, like many, was unsuccessful in cultivating the plant.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Cypripedium_reginae\">Wikipedia</a>)",
      "growZoneNumber": 4,
      "wateringInterval": 7,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Cypripedium_reginae_Orchi_004.jpg"
    },
    {
      "plantId": "aquilegia-coerulea",
      "name": "Rocky Mountain Columbine",
      "description": "Aquilegia coerulea, the state flower of Colorado, is a species of flowering plant in the buttercup family Ranunculaceae, native to the Rocky Mountains from Montana south to New Mexico and west to Idaho and Arizona. Its common name is Colorado blue columbine; sometimes it is called \"Rocky Mountain columbine,\" but this also refers to Aquilegia saximontana.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Aquilegia_coerulea\">Wikipedia</a>)",
      "growZoneNumber": 5,
      "wateringInterval": 3,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/9/94/Aquilegia_caerulea.jpg"
    },
    {
      "plantId": "magnolia-denudata",
      "name": "Yulan Magnolia",
      "description": "Magnolia denudata, known as the lilytree or Yulan magnolia (simplified Chinese: 玉兰花; traditional Chinese: 玉蘭花), is native to central and eastern China. It has been cultivated in Chinese Buddhist temple gardens since 600 AD. Its flowers were regarded as a symbol of purity in the Tang Dynasty and it was planted in the grounds of the Emperor's palace.<br><br>It is the official city flower of Shanghai.<br><br>(From <a href=\"https://en.wikipedia.org/wiki/Magnolia_denudata\">Wikipedia</a>)",
      "growZoneNumber": 8,
      "wateringInterval": 7,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/1/13/Yulan_magnolia_%28Magnolia_denudata%29_%2816953983745%29.jpg"
    },
    {
      "plantId": "bougainvillea-glabra",
      "name": "Bougainvillea",
      "description": "Bougainvillea is a genus of thorny ornamental vines, bushes, or trees. The inflorescence consists of large colourful sepallike bracts which surround three simple waxy flowers. The vine species grow anywhere from 1 to 12 m (3 to 40 ft.) tall, scrambling over other plants with their spiky thorns, which are tipped with a black, waxy substance. They are evergreen where rainfall occurs all year, or deciduous if there is a dry season.<br><br>Bougainvillea glabra (simplified Chinese: 簕杜鹃; traditional Chinese: 簕杜鵑) is the official city flower of Shenzhen and many other cities around the world.<br><br><br>(From <a href=\\\"https://en.wikipedia.org/wiki/Bougainvillea\\\">Wikipedia</a>)",
      "growZoneNumber": 10,
      "wateringInterval": 21,
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Paperflower_--_Bougainvillea_glabra.jpg"
    }
];
var frogAssignments = []; // Stores plant names assigned to Frog1

document.addEventListener('DOMContentLoaded', function() {
    navigate('library'); // Initial load of the plant library
    updateActiveNavbarTab('library');
    updateHomePage();
});

function loadPlants() {
    // Use the embedded data directly instead of fetching
    populatePlants(plantsData);
}

function populatePlants(data) {
    const plantsList = document.getElementById('plantsList');
    plantsList.innerHTML = ''; // Clear existing content
    data.forEach(plant => {
        const plantElement = document.createElement('div');
        plantElement.className = 'plant';
        plantElement.innerHTML = `
            <div class="plantLayout">
                <div class="plantImage">
                    <img src="${plant.imageUrl}" alt="${plant.name}" style="width:100px;height:auto;border-radius:10px">
                </div>
                <div class="plantInfo">
                    <h3>${plant.name}</h3>
                    <p>${plant.description.length > 30 ? plant.description.substring(0, 30) + '...' : plant.description}</p>
                    <p>Water every ${plant.wateringInterval} days</p>
                </div>
            </div>
        `;
        // Modified to prevent duplicate event listener attachment
        plantElement.onclick = () => showPlantDetail(plant);
        plantsList.appendChild(plantElement);
    });
}

function showPlantDetail(plant) {
    const plantDetailContent = document.getElementById('plantDetailContent');
    plantDetailContent.innerHTML = `
        <button onclick="navigate('library')">Back</button>
        <div id="detailHeader" style="display: flex; justify-content: space-between; align-items: center;">
            <h2>${plant.name}</h2>
            <button id="addToHomeButton" style="margin-left: auto;">Add to Home</button>
        </div>
        <img src="${plant.imageUrl}" alt="${plant.name}" style="width:200px;height:auto;">
        <p>${plant.description}</p>
        <p>Water every ${plant.wateringInterval} days in grow zone number ${plant.growZoneNumber}.</p>
    `;
    document.getElementById('addToHomeButton').onclick = () => showAddToHomeForm(plant);

    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('plantDetail').style.display = 'block';
}

function showAddToHomeForm(plant) {
    // Instead of appending content, we'll set the innerHTML of the formContent div
    const formContent = document.getElementById('formContent');
    //assignedFrog option None doesn't actually work
    formContent.innerHTML = `
        <label for="location">Where is the plant located?</label>
        <select id="location">
            <option value="indoor">Indoor</option>
            <option value="windowsill">Windowsill</option>
            <option value="outdoor">Outdoor</option>
        </select>
        <br>
        <label for="potSize">How wide is the pot?</label>
        <select id="potSize">
            <option value="small">Small (<15cm)</option>
            <option value="medium">Medium (15-25cm)</option>
            <option value="large">Large (>25cm)</option>
        </select>
        <br>
        <label for="assignedFrog">Which frog should take care of the plant?</label>
        <select id="assignedFrog">
            <option value="Frog1">Frog1</option>
            <option value="None">None</option>
        </select>
        <br>
        <button onclick="confirmAddToHome('${plant.plantId}')">Confirm</button>
    `;

    // Now navigate to the form page
    navigate('addPlantFormPage');
}

function confirmAddToHome(plantId) {
    const location = document.getElementById('location').value;
    const potSize = document.getElementById('potSize').value;
    const assignedFrog = document.getElementById('assignedFrog').value;

    // Find the plant by its ID
    const plant = plantsData.find(p => p.plantId === plantId);
    if (plant) {
        addPlantToHome(plant.plantId, { location, potSize, assignedFrog });
    } else {
        console.error('Plant not found');
    }
}


function addPlantToHome(plantId, additionalInfo) {
    const plant = plantsData.find(p => p.plantId === plantId);
    console.log(frogAssignments); // Just to verify it's updated

    const homePage = document.getElementById('hello');
    const plantCard = document.createElement('div');
    plantCard.id = `homePlant_${plant.plantId}`;
    plantCard.className = 'plant';
    plantCard.innerHTML = `
        <div class="plantLayout">
            <div class="plantImage">
                <img src="${plant.imageUrl}" alt="${plant.name}" style="width:100px;height:auto;border-radius:10px">
            </div>
            <div class="plantInfo">
                <h3>${plant.name}</h3>
                <p>${plant.description.length > 30 ? plant.description.substring(0, 30) + '...' : plant.description}</p>
                <p>Water every ${plant.wateringInterval} days</p>
            </div>
        </div>
    `;
    plantCard.addEventListener('click', () => showPlantDetailWithRemove(plant, additionalInfo));
    homePage.appendChild(plantCard);

    // Update frog assignments
    frogAssignments.unshift(plant.name);
    updateHomePage();
    navigate('hello'); // Optionally navigate back to the home page
}

function showPlantDetailWithRemove(plant, additionalInfo) {
    const plantDetailContent = document.getElementById('plantDetailContent');
    plantDetailContent.innerHTML = `
        <button onclick="navigate('hello')">Back</button>
        <h2>${plant.name}</h2>
        <img src="${plant.imageUrl}" alt="${plant.name}" style="width:200px;height:auto;">
        <p>${plant.description}</p>
        <p>Location: ${additionalInfo.location}, Pot Size: ${additionalInfo.potSize}, Assigned Frog: Frog1</p>
        <button id="removeFromHomeButton">Remove from Home</button>
        <br><br><br><br><br><br><br><br>
    `;
    document.getElementById('removeFromHomeButton').addEventListener('click', () => removeFromHome(plant.plantId));

    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('plantDetail').style.display = 'block';
}

function removeFromHome(plantId) {
    const plantCard = document.getElementById(`homePlant_${plantId}`);
    if (plantCard) {
        plantCard.remove(); // Remove the plant card from the DOM
        const plantIndex = frogAssignments.indexOf(plantsData.find(p => p.plantId === plantId).name);
        if (plantIndex > -1) {
            frogAssignments.splice(plantIndex, 1); // Remove from assignments
        }
        navigate('hello'); // Navigate back to the homepage
    } else {
        alert('Error: Plant not found on home page.');
    }
    updateHomePage();
}
function updateHomePage() {
    const homePage = document.getElementById('hello');
    const message = document.getElementById('addPlantsMessage') || document.createElement('p');
    message.id = 'addPlantsMessage';
    message.textContent = "Go to the library to add plants";
    message.style.display = 'none'; // Hide the message by default

    // Check if any plants are added to the home page
    const hasPlants = homePage.querySelectorAll('.plant').length > 0;

    if (!hasPlants) {
        message.style.display = 'block';
    } else {
        message.style.display = 'none';
    }
    // Ensure the message element is in the home page
    if (!document.getElementById('addPlantsMessage')) {
        homePage.appendChild(message);
    }
}

function updateFrogsPage() {
    const frogsPage = document.getElementById('frogs');
    frogsPage.innerHTML = '<h2>My Frogs</h2>';
    const frogCard = document.createElement('div');
    frogCard.id = 'frog1Card';
    frogCard.className = 'frog';
    frogCard.innerHTML = `
        <div class="frogContent">
            <h3>Frog1</h3>
            <p>Click for details</p>
        </div>
    `;
    frogCard.addEventListener('click', showFrogDetails);
    frogsPage.appendChild(frogCard);
}

function showFrogDetails() {
    const detailContent = document.getElementById('plantDetailContent');
    const plant = frogAssignments[0];
    detailContent.innerHTML = `
        <button onclick="navigate('frogs')">Back</button>
        <br>
        <h2>Frog1</h2>
        <div class="tabs">
            <button class="tabButton active" data-tab="overview" onclick="changeTab('overview')">Overview</button>
            <button class="tabButton" data-tab="manual" onclick="changeTab('manual')">Manual</button>
        </div>
        <div class="frog">
            <div id="overview" class="tabContent active">
                <h3>Assigned Plant</h3>
                <div id="assignedPlantsContainer"></div>
                <p>Water Level: Moderate</p>
                <p>Light Level: High</p>
                <p>Light Color: White</p>
            </div>
            <div id="manual" class="tabContent">
                <div>
                    <label for="ipAddress">Arduino IP Address:</label>
                    <input type="text" id="ipAddress" value="http://172.20.10.9/">
                </div>
                <div>
                    <button onclick="sendRequest('ledR')">LED Red</button>
                    <button onclick="sendRequest('ledG')">LED Green</button>
                    <button onclick="sendRequest('ledB')">LED Blue</button>
                    <button onclick="sendRequest('ledOff')">LED Off</button>
                </div>
                <div>
                    <button onclick="sendRequest('motorOn')">Motor On</button>
                    <button onclick="sendRequest('motorOff')">Motor Off</button>
                </div>
                <div>
                    <button onclick="sendRequest('autoOn')">Auto On</button>
                    <button onclick="sendRequest('autoOff')">Auto Off</button>
                </div>
                <div>
                    <button onclick="sendRequest('pumpVar50')">Pump 50ml</button>
                    <button onclick="sendRequest('pumpVar100')">Pump 100ml</button>
                    <button onclick="sendRequest('pumpVar300')">Pump 300ml</button>
                </div>
                <br>
                <button onclick="fetchAndDisplaySensorData()">Fetch Data</button>
                <br>
                <br>
                <label for="requestUrl">Enter Full Request URL:</label>
                <input type="text" id="requestUrl" name="requestUrl" value="http://172.20.10.9/motorOn">
                <button onclick="sendCustomRequest()">Send Request</button>
                <br>
                <br>
                <label for="sensorDataRaw">Raw Fetched Data: </label>
                <div id="sensorDataRaw"></div>
                <br>
                <label for="sensorDataVars">Sensor Data Variables: </label>
                <div id="sensorDataVars"></div>
                <br>
                <br>
                <label for="debug">Debug1: </label>
                <div id="debug"></div>
                <br>
                <label for="debug2">Debug2: </label>
                <div id="debug2"></div>
                <br>
                <label for="debug3">Debug3: </label>
                <div id="debug3"></div>
                <br>
                <label for="debug4">Debug4: </label>
                <div id="debug4"></div>
                <br>
                <label for="httpbinData">Sample fetch: </label>
                <div id="httpbinData"></div>
            </div>
        </div>
    `;
    document.getElementById('assignedPlantsContainer').textContent = plant;
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById('plantDetail').style.display = 'block';
}

function sendRequest(endpoint) {
    clearDebug();
    const base = document.getElementById('ipAddress').value;
    const slash = base.endsWith('/') ? '' : '/';
    const url = base + slash + endpoint + '?nocache=${new Date().getTime()}';

    console.log("Sending request to URL: " + url); // For debugging
    document.getElementById('debug').textContent = url;

    fetch(url, {
         method: 'GET', // or 'POST'
    })
    .then(response => {
        if(response.ok) {
            console.log('Request successful');
            document.getElementById('debug2').textContent = 'Request successful';
        } else {
            console.error('Request failed');
            document.getElementById('debug2').textContent = 'Request failed';
        }
        return response.text(); // Use text() to dump whatever is received
    })
    .then(data => {
        console.log("Data received:", data); // Log the raw data
        // Optionally display the raw data on the web page
        document.getElementById('sensorDataRaw').textContent = data;
        updateSensorData(data);
        document.getElementById('debug3').textContent = 'data field';
    })
    .catch(error => {
        console.error('Error making request:', error);
        document.getElementById('debug4').textContent = error;
    });
}

function sendCustomRequest() {
    clearDebug();
    const url = document.getElementById('requestUrl').value + '?nocache=${new Date().getTime()}';

    console.log("Sending request to URL: " + url); // For debugging
    document.getElementById('debug').textContent = url;

    fetch(url, {
        method: 'GET', // or 'POST'
    })
    .then(response => {
        if(response.ok) {
            console.log('Request successful');
            document.getElementById('debug2').textContent = 'Request successful';
        } else {
            console.error('Request failed');
            document.getElementById('debug2').textContent = 'Request failed';
        }
        return response.text(); // Use text() to dump whatever is received
    })
    .then(data => {
        console.log("Data received:", data); // Log the raw data
        // Optionally display the raw data on the web page
        document.getElementById('sensorDataRaw').textContent = data;
        updateSensorData(data);
        document.getElementById('debug3').textContent = 'data field';
    })
    .catch(error => {
        console.error('Error making request:', error);
        document.getElementById('debug4').textContent = error;
    });
}

let globalLightLevel = 0;
let globalMoistureLevel = 0;

function fetchAndDisplaySensorData() {
    clearDebug();
    // Attempt to fetch data from httpbin.org
    fetch('https://httpbin.org/get')
    .then(response => response.json())
    .then(data => {
        // Successfully fetched data from httpbin.org
        console.log(data); // Log the data for debugging
        // Update the HTML to display httpbin data
        document.getElementById('httpbinData').innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Error:', error); // Log the error
        // Display a message indicating no data from httpbin.org
        document.getElementById('httpbinData').textContent = "No httpbin data";
    });

    // Fetch from arduino
    const base = document.getElementById('ipAddress').value;
    const slash = base.endsWith('/') ? '' : '/';
    const url = base + slash;
    // const base = document.getElementById('ipAddress').value + '/sensor-data'; // If endpoint is needed
    console.log("Sending request to URL: " + url); // For debugging
    document.getElementById('debug').textContent = url;

    fetch(url, {
        method: 'GET', // or 'POST'
    })
    .then(response => {
        if(response.ok) {
            console.log('Request successful');
            document.getElementById('debug2').textContent = 'Request successful';
        } else {
            console.error('Request failed');
            document.getElementById('debug2').textContent = 'Request failed';
        }
        return response.text(); // Use text() to dump whatever is received
    })
    .then(data => {
        console.log("Sensor Data:", data);
        document.getElementById('sensorDataRaw').textContent = data;
        updateSensorData(data);
        document.getElementById('debug3').textContent = 'data field';
    })
    .catch(error => {
        console.error('Error fetching sensor data', error);
        document.getElementById('debug4').textContent = error;
        document.getElementById('sensorDataRaw').textContent = "No data";
    });
}

// Need to update based on data format
function updateSensorData(data) {
    // The "data" variable here is messed up due to using response.text in the above functions, may want to use response.json
    const sensorDataVarsDiv = document.getElementById('sensorDataVars');
    //Need to adjust the following based on data format
    /*let lightLevelDisplay = typeof data.lightLevel === 'string' ? data.lightLevel : `Light Level: ${data.lightLevel}`;
    let moistureLevelDisplay = typeof data.moistureLevel === 'string' ? data.moistureLevel : `Moisture Level: ${data.moistureLevel}`;

    //This div no longer exists, use the sensorDataGlobal instead
    sensorDataGlobalDiv.innerHTML = `
        <p>${lightLevelDisplay}</p>
        <p>${moistureLevelDisplay}</p>
    `;*/

    // For debugging, but these should remain 0 since the data isn't being parsed
    const content = `
        <p>Light Level: ${globalLightLevel}</p>
        <p>Moisture Level: ${globalMoistureLevel}</p>
    `;
    sensorDataVarsDiv.innerHTML = content;
}

function clearDebug(){
    document.getElementById('debug').textContent = 'Clear';
    document.getElementById('debug2').textContent = 'Clear';
    document.getElementById('debug3').textContent = 'Clear';
    document.getElementById('debug4').textContent = 'Clear';
}
function navigate(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(pageElement => pageElement.style.display = 'none');

    // Show the selected page
    document.getElementById(page).style.display = 'block';
    if (page === 'library') {
        loadPlants(); // Load plants data when navigating to Library
    }
    // Specific actions for the Frogs page
    if (page === 'frogs') {
        updateFrogsPage();
    }
    if (page === 'hello') {
        updateHomePage();
    }
    // Update the active state of the navbar tabs
    updateActiveNavbarTab(page);
}
function changeTab(selectedTab) {
    // Remove active class from all tabs
    document.querySelectorAll('.tabButton').forEach(tab => {
        tab.classList.remove('active');
    });

    // Hide all tab contents
    document.querySelectorAll('.tabContent').forEach(content => {
        content.classList.remove('active');
    });

    // Set the clicked tab as active
    document.querySelector(`#${selectedTab}`).classList.add('active');
    document.querySelector(`.tabButton[data-tab="${selectedTab}"]`).classList.add('active');
}
function updateActiveNavbarTab(activePage) {
    // Clear the active class from all navbar tabs
    document.querySelectorAll('.navbar a').forEach(tab => {
        tab.classList.remove('active');
    });

    // Add the active class to the current active page tab
    document.querySelector(`.navbar a[onclick="navigate('${activePage}')"]`).classList.add('active');
}