(function() {
    // ----------------------------- QUESTION BANK (120) with per‑option explanations -----------------------------
    function buildQuestionBank() {
        const bank = [];

        // Helper: create a question with wrongExps array (4 elements, empty for correct index)
        function addQ(question, options, answerIndex, hint, correctExp, wrongExps) {
            // Ensure wrongExps is an array of 4 strings; if shorter, pad with empty strings
            const fullWrongExps = [...wrongExps];
            while (fullWrongExps.length < 4) fullWrongExps.push("");
            bank.push({
                question,
                options,
                answer: answerIndex,
                hint,
                correctExp,
                wrongExps: fullWrongExps
            });
        }

        // ========== Ecology / Environment (1–15) ==========
        addQ(
            "Which of the following is a biotic component of a habitat?",
            ["Sunlight", "Water", "Tree", "Soil"],
            2,
            "Biotic means living.",
            "Trees are living organisms, hence biotic.",
            [
                "Sunlight is abiotic (non-living).",
                "Water is abiotic (non-living).",
                "", // correct
                "Soil is abiotic (non-living)."
            ]
        );

        addQ(
            "Elephants enter human farms mainly because –",
            ["they like human company", "forests shrink and food becomes scarce", "they want to play with children", "roads attract them"],
            1,
            "Deforestation and water scarcity.",
            "Loss of forest cover and water scarcity force elephants to search for food in farms.",
            [
                "This is not backed by ecological reasons.",
                "", // correct
                "This is not backed by ecological reasons.",
                "This is not backed by ecological reasons."
            ]
        );

        addQ(
            "What is a population in ecology?",
            ["All different organisms in a pond", "Group of the same kind of organisms in an area", "Only plants in a forest", "Birds and trees together"],
            1,
            "Same species, same area, same time.",
            "Population refers to individuals of the same species living together.",
            [
                "This describes a community (different species together).",
                "", // correct
                "This is too narrow; population includes all organisms of one species, not just plants.",
                "This describes multiple different species, which is a community, not a population."
            ]
        );

        addQ(
            "Which gas is released during photosynthesis?",
            ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            0,
            "Plants produce food and release this gas.",
            "Oxygen is the by-product of photosynthesis.",
            [
                "", // correct
                "Carbon dioxide is taken in during photosynthesis, not released.",
                "Nitrogen is not directly involved in photosynthesis.",
                "Hydrogen is not released; it's part of the water molecule used in the process."
            ]
        );

        addQ(
            "A food chain always starts with –",
            ["herbivore", "carnivore", "producer", "decomposer"],
            2,
            "Who makes its own food?",
            "Green plants (producers) are the first trophic level as they convert solar energy into chemical energy.",
            [
                "Herbivores are primary consumers that eat producers, so they come second.",
                "Carnivores are secondary or tertiary consumers that eat other animals.",
                "", // correct
                "Decomposers break down dead matter and come at the end of the food chain/web."
            ]
        );

        addQ(
            "If fish are present in a pond, dragonfly larvae are fewer because –",
            ["fish eat dragonfly larvae", "dragonflies avoid ponds", "water becomes toxic", "fish scare adult dragonflies"],
            0,
            "Fish feed on larvae.",
            "Fish prey on dragonfly larvae, controlling their population.",
            [
                "", // correct
                "Dragonflies lay eggs in water, so they don't avoid ponds entirely.",
                "The presence of fish doesn't make water toxic.",
                "Adult dragonflies are fast fliers and not easily scared by fish; the predation is on aquatic larvae."
            ]
        );

        addQ(
            "Mushrooms and bacteria that break down dead matter are called –",
            ["producers", "herbivores", "decomposers", "parasites"],
            2,
            "They recycle nutrients.",
            "Fungi (mushrooms) and bacteria are primary decomposers that break down dead organic matter.",
            [
                "Producers (like plants) make their own food through photosynthesis.",
                "Herbivores eat plants directly.",
                "", // correct
                "Parasites feed on living hosts, not dead matter."
            ]
        );

        addQ(
            "In the Sundarbans, mangrove forests protect by –",
            ["providing timber", "slowing down winds and waves", "attracting tourists", "increasing salt in water"],
            1,
            "They act as bio-shields.",
            "Mangroves' dense root systems reduce wave energy and wind speed, protecting coastlines from erosion and storms.",
            [
                "While they provide timber, this is not their primary protective function.",
                "", // correct
                "Tourism is an economic benefit, not a protective one.",
                "They don't increase salinity; they are adapted to saline conditions."
            ]
        );

        addQ(
            "Which of the following is an example of mutualism?",
            ["Orchid growing on a tree", "Ticks on a dog", "Honeybee and flower", "Snake eating frog"],
            2,
            "Both benefit.",
            "Bee gets nectar (food), flower gets pollinated (reproduction) – both benefit.",
            [
                "Orchid on a tree is commensalism (orchid benefits, tree neither benefits nor harmed).",
                "Ticks on a dog is parasitism (tick benefits, dog harmed).",
                "", // correct
                "Snake eating frog is predation (snake benefits, frog killed)."
            ]
        );

        addQ(
            "If all decomposers vanish from Earth –",
            ["soil will become more fertile", "nutrients will not recycle", "plants will grow faster", "oxygen level will increase"],
            1,
            "Who breaks down dead stuff?",
            "Decomposers break down dead matter and release nutrients back into soil. Without them, nutrients remain locked in dead bodies, and the nutrient cycle stops.",
            [
                "Soil fertility would decrease, not increase, as nutrients are not replenished.",
                "", // correct
                "Plants would not get nutrients from soil and would die.",
                "Oxygen levels are not directly affected by decomposers."
            ]
        );

        addQ(
            "Which of these is a terrestrial ecosystem?",
            ["Pond", "Lake", "Grassland", "River"],
            2,
            "On land.",
            "Grasslands are land-based (terrestrial) ecosystems.",
            [
                "Pond is aquatic (water-based).",
                "Lake is aquatic.",
                "", // correct
                "River is aquatic."
            ]
        );

        addQ(
            "The 'habitable zone' around a star means –",
            ["zone where space ships can land", "distance where liquid water can exist", "area with oxygen", "region with green color"],
            1,
            "Goldilocks zone.",
            "The habitable zone is the region around a star where temperatures allow liquid water to exist on a planet's surface.",
            [
                "It has nothing to do with spaceship landing.",
                "", // correct
                "Oxygen is not a requirement for the zone definition; some planets might have liquid water without oxygen.",
                "Green color is irrelevant; it's about temperature and water."
            ]
        );

        addQ(
            "Competition in an ecosystem helps –",
            ["increase population", "maintain balance", "always harm both species", "create more food"],
            1,
            "Limited resources.",
            "Competition for limited resources (food, space, mates) prevents any one species from overpopulating and helps maintain ecological balance.",
            [
                "Competition tends to limit population growth, not increase it.",
                "", // correct
                "While competition can be harmful, it doesn't always harm both species equally; it can lead to adaptation and niche specialization.",
                "Competition doesn't create more food; it's about争夺 existing resources."
            ]
        );

        addQ(
            "Which is a correctly matched food chain?",
            ["Grass → deer → lion", "Lion → deer → grass", "Sun → fish → bird", "Eagle → snake → grain"],
            0,
            "Start with producer.",
            "Grass (producer) is eaten by deer (primary consumer/herbivore), which is eaten by lion (secondary consumer/carnivore).",
            [
                "", // correct
                "Lion cannot eat deer directly without deer eating grass first, and the order is reversed.",
                "Sun is not a living organism in the food chain; fish eating sun is impossible.",
                "Eagle eating snake is possible, but snake eating grain? Snakes are carnivores, they don't eat grain. Also, the chain should start with a producer (grain), but the order is wrong."
            ]
        );

        addQ(
            "The main cause of thunderstorms is –",
            ["rising warm moist air", "falling of meteorites", "earthquakes", "ocean currents"],
            0,
            "Convection.",
            "Warm, moist air rises (convection), cools, condenses into cumulonimbus clouds, leading to thunderstorms.",
            [
                "", // correct
                "Meteorites are space rocks and have nothing to do with weather.",
                "Earthquakes are geological phenomena caused by tectonic plate movement.",
                "Ocean currents affect climate patterns but don't directly cause thunderstorms."
            ]
        );

        // ========== Solutions & Density (16–28) ==========
        addQ(
            "What is the SI unit of density?",
            ["kg/m³", "kg/m²", "g/L", "N/m²"],
            0,
            "mass/volume in SI.",
            "The SI unit for mass is kg, for volume is m³, so density (mass/volume) is kg/m³.",
            [
                "", // correct
                "kg/m² is a unit related to pressure or area density (mass per unit area), not volume density.",
                "g/L is a common unit but not the SI unit; it uses grams and litres.",
                "N/m² is Pascal, the SI unit of pressure."
            ]
        );

        addQ(
            "A solution in which no more solute can be dissolved at that temperature is called –",
            ["unsaturated", "dilute", "saturated", "concentrated"],
            2,
            "Reached its limit.",
            "A saturated solution contains the maximum amount of solute that can be dissolved at a given temperature.",
            [
                "An unsaturated solution can still dissolve more solute.",
                "Dilute means a small amount of solute relative to solvent, not necessarily at its limit.",
                "", // correct
                "Concentrated means a large amount of solute, but it may still be unsaturated."
            ]
        );

        addQ(
            "Which of the following will sink in water? (density of water = 1 g/cm³)",
            ["wood (0.8 g/cm³)", "ice (0.92 g/cm³)", "iron (7.8 g/cm³)", "oil (0.9 g/cm³)"],
            2,
            "Density > 1 g/cm³ sinks.",
            "Iron's density (7.8) is greater than water's (1.0), so it sinks.",
            [
                "Wood (0.8) is less dense, so it floats.",
                "Ice (0.92) is less dense, so it floats (which is why ice cubes float in water).",
                "", // correct
                "Oil (0.9) is less dense, so it floats on water."
            ]
        );

        addQ(
            "The meniscus for water in a measuring cylinder is –",
            ["curved upward", "curved downward", "straight line", "always at 45°"],
            1,
            "Water curves up at edges.",
            "Water has a concave meniscus (curves downward) because water molecules are more attracted to the glass (adhesion) than to each other (cohesion).",
            [
                "A curved upward (convex) meniscus is seen in liquids like mercury, where cohesion is stronger than adhesion.",
                "", // correct
                "A straight line would only occur if there were no adhesive/cohesive forces, which is not the case.",
                "The meniscus shape is not fixed at 45°; it's a curve."
            ]
        );

        addQ(
            "Solubility of most solids in water generally _______ with increase in temperature.",
            ["decreases", "increases", "remains same", "first decreases then increases"],
            1,
            "Heat helps dissolve.",
            "For most solids, increasing temperature increases the kinetic energy of molecules, allowing more solute to dissolve.",
            [
                "Solubility of solids generally increases, not decreases (gases decrease with temperature).",
                "", // correct
                "Solubility changes with temperature for most substances.",
                "While a few substances might show anomalous behavior, the general trend is an increase."
            ]
        );

        addQ(
            "1 mL is equivalent to –",
            ["1 cm³", "1 m³", "1 dm³", "1 mm³"],
            0,
            "Volume relation.",
            "1 millilitre (mL) is exactly equal to 1 cubic centimetre (cm³).",
            [
                "", // correct
                "1 m³ is 1,000,000 mL (or 1000 litres).",
                "1 dm³ is 1 litre, which is 1000 mL.",
                "1 mm³ is 0.001 mL (or 1 microlitre)."
            ]
        );

        addQ(
            "Which instrument is used to measure mass?",
            ["thermometer", "balance", "barometer", "measuring cylinder"],
            1,
            "Mass vs weight.",
            "A balance (like a triple beam balance or electronic balance) is used to measure mass.",
            [
                "A thermometer measures temperature.",
                "", // correct
                "A barometer measures atmospheric pressure.",
                "A measuring cylinder measures volume."
            ]
        );

        addQ(
            "What is the relative density of a substance if its density is 2.5 g/cm³ and water density is 1 g/cm³?",
            ["2.5", "1.5", "0.4", "25"],
            0,
            "Divide by water density.",
            "Relative density = Density of substance / Density of water = 2.5 / 1 = 2.5.",
            [
                "", // correct
                "1.5 would be the difference (2.5 - 1), not the ratio.",
                "0.4 is the reciprocal (1/2.5).",
                "25 would be if you multiplied by 10 or squared something incorrectly."
            ]
        );

        addQ(
            "When sugar dissolves in water, the mixture is –",
            ["non-uniform", "heterogeneous", "uniform", "suspension"],
            2,
            "Even distribution.",
            "Sugar dissolves completely, forming a homogeneous (uniform) mixture where sugar particles are evenly distributed at the molecular level.",
            [
                "Non-uniform and heterogeneous mean the same thing: different parts have different compositions.",
                "Heterogeneous means the same as non-uniform.",
                "", // correct
                "A suspension has visible particles that settle over time; sugar solution does not settle."
            ]
        );

        addQ(
            "The density of a substance _______ on heating (generally).",
            ["increases", "decreases", "stays same", "may increase or decrease"],
            1,
            "Expand volume.",
            "Heating generally causes substances to expand (volume increases) while mass remains constant, so density (mass/volume) decreases.",
            [
                "Density decreases, not increases (except for water between 0-4°C).",
                "", // correct
                "Density changes with temperature.",
                "For most substances, it consistently decreases."
            ]
        );

        addQ(
            "Which has highest density?",
            ["cold water at 4°C", "ice at 0°C", "steam at 100°C", "warm water at 50°C"],
            0,
            "Water anomaly.",
            "Water has its maximum density at 4°C due to hydrogen bonding structure.",
            [
                "", // correct
                "Ice is less dense (0.92 g/cm³) than water, which is why it floats.",
                "Steam is water vapor, very low density.",
                "Warm water at 50°C is less dense than cold water at 4°C."
            ]
        );

        addQ(
            "ORS stands for –",
            ["Oral Rehydration Solution", "Oxygen Rich Saline", "Osmosis Relief Salt", "Organic Recovery System"],
            0,
            "Health drink.",
            "ORS is a simple mixture of sugar and salts in clean water, used to prevent and treat dehydration.",
            [
                "", // correct
                "It has nothing to do with oxygen.",
                "It's not about relieving osmosis specifically, though it works through osmosis.",
                "It's not an organic system; it's a medical solution."
            ]
        );

        addQ(
            "Which of these is a gaseous solution?",
            ["air", "soda water", "oxygen", "brass"],
            0,
            "Gas in gas.",
            "Air is a homogeneous mixture (solution) of gases, primarily nitrogen and oxygen.",
            [
                "", // correct
                "Soda water is a gas (CO₂) dissolved in a liquid (water) – a liquid solution.",
                "Oxygen is a pure element, not a mixture.",
                "Brass is a solid solution (alloy) of copper and zinc."
            ]
        );

        // ========== Elements, Compounds, Mixtures (29–38) ==========
        addQ(
            "Which one is an element?",
            ["Water", "Salt", "Oxygen", "Sugar"],
            2,
            "Cannot be broken further.",
            "Oxygen (O₂) is an element, consisting of only one type of atom.",
            [
                "Water (H₂O) is a compound of hydrogen and oxygen.",
                "Salt (NaCl) is a compound of sodium and chlorine.",
                "", // correct
                "Sugar (C₁₂H₂₂O₁₁) is a compound of carbon, hydrogen, and oxygen."
            ]
        );

        addQ(
            "Brass is a mixture of –",
            ["copper and zinc", "copper and tin", "iron and carbon", "aluminium and magnesium"],
            0,
            "Alloy.",
            "Brass is an alloy primarily composed of copper and zinc.",
            [
                "", // correct
                "Copper and tin make bronze, not brass.",
                "Iron and carbon make steel.",
                "Aluminium and magnesium are used in other alloys but not brass."
            ]
        );

        addQ(
            "A pure substance has –",
            ["variable composition", "only one type of particle", "two or more compounds", "visible different parts"],
            1,
            "Homogeneous matter.",
            "A pure substance (element or compound) is made of only one kind of particle (atoms or molecules) with a fixed composition.",
            [
                "Variable composition is a property of mixtures.",
                "", // correct
                "Two or more compounds describe a mixture.",
                "Visible different parts describe a heterogeneous mixture."
            ]
        );

        addQ(
            "Passing electric current through water gives –",
            ["oxygen and hydrogen", "hydrogen and chlorine", "nitrogen and oxygen", "only oxygen"],
            0,
            "Electrolysis.",
            "Electrolysis of water splits H₂O molecules into hydrogen gas (at the cathode) and oxygen gas (at the anode).",
            [
                "", // correct
                "Chlorine is not present in pure water; it would come from saltwater electrolysis.",
                "Nitrogen is not a component of water.",
                "Both gases are produced, not just oxygen."
            ]
        );

        addQ(
            "Which is a compound?",
            ["Iron sulfide", "Iron filings", "Sulfur powder", "Air"],
            0,
            "Chemically bonded.",
            "Iron sulfide (FeS) is a compound where iron and sulfur are chemically bonded in a fixed ratio.",
            [
                "", // correct
                "Iron filings are the pure element iron, just in small pieces.",
                "Sulfur powder is the pure element sulfur.",
                "Air is a mixture of gases, not a chemically combined compound."
            ]
        );

        addQ(
            "The ratio of hydrogen to oxygen in water is –",
            ["1:2", "2:1", "1:1", "2:2"],
            1,
            "H₂O formula.",
            "Two hydrogen atoms, one oxygen, hence 2:1 by atom count.",
            [
                "1:2 would be the opposite.",
                "", // correct
                "1:1 is incorrect.",
                "2:2 simplifies to 1:1, also incorrect."
            ]
        );

        addQ(
            "Mishraloha in ancient India refers to –",
            ["alloys", "poisons", "herbal mixtures", "glass"],
            0,
            "Metal mixtures.",
            "Mishraloha means alloys used in medicines.",
            [
                "", // correct
                "Poisons are unrelated.",
                "Herbal mixtures are not alloys.",
                "Glass is not an alloy."
            ]
        );

        addQ(
            "Which of these is a metalloid?",
            ["Silicon", "Sodium", "Mercury", "Helium"],
            0,
            "In between metal/nonmetal.",
            "Silicon is a metalloid.",
            [
                "", // correct
                "Sodium is a metal.",
                "Mercury is a metal.",
                "Helium is a nonmetal."
            ]
        );

        addQ(
            "Stainless steel contains –",
            ["iron, nickel, chromium", "copper, tin, zinc", "aluminium, magnesium", "lead, carbon"],
            0,
            "Common alloy.",
            "Stainless steel = Fe + Ni + Cr + C.",
            [
                "", // correct
                "Copper, tin, zinc make bronze or brass, not stainless steel.",
                "Aluminium, magnesium are used in other alloys.",
                "Lead, carbon is not a standard alloy."
            ]
        );

        addQ(
            "Which method would you use to separate iron and sulfur mixture?",
            ["magnetic separation", "distillation", "evaporation", "filtration"],
            0,
            "Iron attracted.",
            "Magnet attracts iron, leaving sulfur.",
            [
                "", // correct
                "Distillation is for liquids based on boiling points.",
                "Evaporation is for dissolving solids from liquids.",
                "Filtration separates insoluble solids from liquids."
            ]
        );

        // ========== Pressure, Winds, Storms (39–51) ==========
        addQ(
            "Pressure = ?",
            ["Force × Area", "Force / Area", "Area / Force", "Mass / Volume"],
            1,
            "Basic formula.",
            "Pressure = Force / Area.",
            [
                "Force × Area is not pressure.",
                "", // correct
                "Area / Force is the inverse of pressure.",
                "Mass / Volume is density."
            ]
        );

        addQ(
            "Why do bags with broad straps feel more comfortable?",
            ["less weight", "more pressure", "less pressure", "straps are soft"],
            2,
            "Area matters.",
            "Broad straps increase area, so less pressure on shoulders.",
            [
                "Weight remains the same.",
                "More pressure would be uncomfortable.",
                "", // correct
                "Softness helps, but the main reason is increased area reducing pressure."
            ]
        );

        addQ(
            "Which instrument measures atmospheric pressure?",
            ["thermometer", "barometer", "manometer", "hygrometer"],
            1,
            "Weather tool.",
            "Barometer measures air pressure.",
            [
                "Thermometer measures temperature.",
                "", // correct
                "Manometer measures gas pressure in labs, not atmospheric.",
                "Hygrometer measures humidity."
            ]
        );

        addQ(
            "The SI unit of pressure is –",
            ["Newton", "Pascal", "Joule", "Watt"],
            1,
            "N/m².",
            "Pascal (Pa) = N/m².",
            [
                "Newton is force.",
                "", // correct
                "Joule is energy.",
                "Watt is power."
            ]
        );

        addQ(
            "In a liquid, pressure with depth ______.",
            ["decreases", "increases", "remains same", "first increases then decreases"],
            1,
            "Gravity of water.",
            "Pressure increases with depth due to weight of liquid above.",
            [
                "It increases, not decreases.",
                "", // correct
                "It changes with depth.",
                "It consistently increases."
            ]
        );

        addQ(
            "During a cyclone, the calm region at the centre is called –",
            ["eye", "wall", "core", "vortex"],
            0,
            "Cyclone structure.",
            "The eye is calm and low pressure.",
            [
                "", // correct
                "The eyewall has high winds.",
                "Core is not the standard term.",
                "Vortex refers to the spinning motion, not the calm centre."
            ]
        );

        addQ(
            "A rubber sucker sticks to wall because –",
            ["glue", "magnetic force", "atmospheric pressure", "static electricity"],
            2,
            "Air pushes.",
            "Air pressure outside > inside, so it sticks.",
            [
                "No glue is used.",
                "No magnetic force.",
                "", // correct
                "Static electricity is not involved."
            ]
        );

        addQ(
            "Which is true about high-speed wind?",
            ["increases air pressure", "decreases air pressure", "no effect on pressure", "makes temperature rise"],
            1,
            "Bernoulli effect.",
            "Fast winds reduce pressure (e.g., blowing between balloons).",
            [
                "It decreases pressure.",
                "", // correct
                "It does affect pressure.",
                "Temperature change is not direct."
            ]
        );

        addQ(
            "Sea breeze blows during –",
            ["night", "day", "evening", "all the time"],
            1,
            "Land heats fast.",
            "Day: land warm, low pressure → sea to land breeze.",
            [
                "Night gives land breeze.",
                "", // correct
                "Evening is transition, but sea breeze is primarily daytime.",
                "It alternates day and night."
            ]
        );

        addQ(
            "Lightning is caused by –",
            ["clouds rubbing", "meteor showers", "solar flares", "earth's magnetic field"],
            0,
            "Static discharge.",
            "Collisions of ice/water droplets create charges; discharge = lightning.",
            [
                "", // correct
                "Meteor showers are unrelated.",
                "Solar flares affect space weather, not lightning.",
                "Earth's magnetic field doesn't cause lightning."
            ]
        );

        addQ(
            "Thunderstorms in West Bengal before monsoon are called –",
            ["Mango showers", "Kalboishakhi", "Bordoisila", "Western disturbance"],
            1,
            "Local name.",
            "Kalboishakhi (Nor'westers) in Bengal.",
            [
                "Mango showers are in South India.",
                "", // correct
                "Bordoisila is in Assam.",
                "Western disturbances affect North India."
            ]
        );

        addQ(
            "Overhead water tanks are placed at height to –",
            ["look nice", "increase water pressure", "store more water", "avoid sunlight"],
            1,
            "Height gives pressure.",
            "Greater height → greater pressure at taps.",
            [
                "Not for looks.",
                "", // correct
                "Storage capacity depends on tank size, not height.",
                "Sunlight is irrelevant."
            ]
        );

        addQ(
            "Which is safer during lightning?",
            ["standing under tall tree", "lying flat on ground", "sitting inside a car", "holding metal umbrella"],
            2,
            "Metal car = Faraday cage.",
            "Car is safe (metal body conducts around you).",
            [
                "Trees attract lightning.",
                "Lying flat reduces risk but car is safer.",
                "", // correct
                "Metal umbrella attracts lightning."
            ]
        );

        // ========== Light, Mirrors, Lenses (52–63) ==========
        addQ(
            "A concave mirror curves –",
            ["inwards", "outwards", "flat", "both sides"],
            0,
            "Cave = inside.",
            "Concave mirror reflecting surface curves inward.",
            [
                "", // correct
                "Outwards is convex.",
                "Flat is plane mirror.",
                "Both sides would be a lens."
            ]
        );

        addQ(
            "Which mirror always forms a diminished, erect image?",
            ["plane mirror", "concave mirror", "convex mirror", "cylindrical mirror"],
            2,
            "Side mirrors.",
            "Convex mirror gives diminished, erect image and wider view.",
            [
                "Plane mirror gives same size.",
                "Concave can magnify.",
                "", // correct
                "Cylindrical is not common for this property."
            ]
        );

        addQ(
            "The angle of incidence equals angle of reflection is a law valid for –",
            ["only plane mirrors", "only spherical mirrors", "all mirrors", "only concave mirrors"],
            2,
            "Universal law.",
            "Laws of reflection hold for every mirror.",
            [
                "It holds for all mirrors, not just plane.",
                "It holds for all mirrors, not just spherical.",
                "", // correct
                "It holds for all mirrors, not just concave."
            ]
        );

        addQ(
            "Which lens converges light?",
            ["concave lens", "convex lens", "cylindrical lens", "flat glass"],
            1,
            "Thicker middle.",
            "Convex lens = converging lens.",
            [
                "Concave diverges.",
                "", // correct
                "Cylindrical lens focuses in one direction.",
                "Flat glass does not converge."
            ]
        );

        addQ(
            "The image formed by a convex lens when object is very close (less than focal length) is –",
            ["real and inverted", "virtual and erect", "real and diminished", "no image"],
            1,
            "Magnifying glass.",
            "When object inside focal length, image virtual, erect, enlarged.",
            [
                "Real and inverted occurs when object beyond focal length.",
                "", // correct
                "Real and diminished occurs when object beyond 2F.",
                "Image is formed."
            ]
        );

        addQ(
            "Dentist uses which mirror to see enlarged view of teeth?",
            ["plane", "concave", "convex", "prism"],
            1,
            "Enlarged image.",
            "Concave mirror gives enlarged image when object close.",
            [
                "Plane gives same size.",
                "", // correct
                "Convex gives diminished.",
                "Prism is for bending light, not magnification."
            ]
        );

        addQ(
            "The splitting of light into colours is called –",
            ["reflection", "refraction", "dispersion", "diffraction"],
            2,
            "Rainbow.",
            "Dispersion (e.g., prism).",
            [
                "Reflection is bouncing back.",
                "Refraction is bending.",
                "", // correct
                "Diffraction is spreading around obstacles."
            ]
        );

        addQ(
            "Which of the following can burn paper when focused by sunlight?",
            ["plane mirror", "concave mirror", "convex mirror", "any mirror"],
            1,
            "Concentrate rays.",
            "Concave mirror converges sunlight to a point (heat).",
            [
                "Plane mirror reflects but does not focus.",
                "", // correct
                "Convex mirror diverges.",
                "Only concave can focus."
            ]
        );

        addQ(
            "An object seen through a concave lens always appears –",
            ["enlarged", "diminished and erect", "inverted", "same size"],
            1,
            "Always smaller.",
            "Concave lens gives virtual, erect, diminished image.",
            [
                "Concave lens does not enlarge.",
                "", // correct
                "Concave lens never inverts.",
                "It is always diminished."
            ]
        );

        addQ(
            "Warning on car side mirror: 'objects are closer than they appear' because –",
            ["mirror is plane", "mirror is concave", "mirror is convex", "glass is tinted"],
            2,
            "Convex = wide but smaller.",
            "Convex mirror makes objects look smaller, hence appear farther, so they are actually closer.",
            [
                "Plane mirror shows true distance.",
                "Concave could magnify, making them appear closer.",
                "", // correct
                "Tinting doesn't affect distance perception."
            ]
        );

        addQ(
            "The normal is a line drawn ______ to the mirror surface.",
            ["parallel", "perpendicular", "tangent", "at 45°"],
            1,
            "Right angle.",
            "Normal is perpendicular at point of incidence.",
            [
                "Parallel would be along the surface.",
                "", // correct
                "Tangent touches at one point but not perpendicular.",
                "45° is a specific angle, not the definition."
            ]
        );

        addQ(
            "Which part of the eye contains a convex lens?",
            ["cornea", "iris", "pupil", "crystalline lens"],
            3,
            "Eye lens.",
            "The eye's lens is convex and changes shape.",
            [
                "Cornea helps focus but is not the flexible lens.",
                "Iris controls pupil size.",
                "Pupil is just an opening.",
                "" // correct
            ]
        );

        // ========== Earth - Unique Planet (64–74) ==========
        addQ(
            "Why is Earth called 'Blue Planet'?",
            ["many blue flowers", "70% water", "sky is blue", "blue rocks"],
            1,
            "Water cover.",
            "Oceans make it appear blue from space.",
            [
                "Flowers are not visible from space.",
                "", // correct
                "Sky is blue but Earth's blue appearance is from water.",
                "Rocks are not predominantly blue."
            ]
        );

        addQ(
            "Greenhouse effect on Earth is mainly due to –",
            ["oxygen", "nitrogen", "carbon dioxide", "hydrogen"],
            2,
            "Traps heat.",
            "CO₂ and other greenhouse gases trap heat.",
            [
                "Oxygen is not a greenhouse gas.",
                "Nitrogen is not a greenhouse gas.",
                "", // correct
                "Hydrogen is negligible."
            ]
        );

        addQ(
            "Which planet is hottest in solar system?",
            ["Mercury", "Venus", "Mars", "Jupiter"],
            1,
            "Thick CO₂ atmosphere.",
            "Venus has thick atmosphere trapping heat, hotter than Mercury, even though Mercury closer.",
            [
                "Mercury is closer but lacks atmosphere.",
                "", // correct
                "Mars is cold.",
                "Jupiter is far and cold."
            ]
        );

        addQ(
            "Earth's magnetic field protects us from –",
            ["asteroids", "solar wind", "acid rain", "ozone depletion"],
            1,
            "Charged particles.",
            "Magnetic field deflects solar wind (charged particles).",
            [
                "Asteroids are not deflected by magnetic field.",
                "", // correct
                "Acid rain is caused by pollution.",
                "Ozone depletion is from CFCs."
            ]
        );

        addQ(
            "Goldilocks zone refers to –",
            ["habitable zone with liquid water", "zone with gold mines", "atmosphere zone", "core of Earth"],
            0,
            "Just right.",
            "Distance from star where water can be liquid; Earth lies in this zone.",
            [
                "", // correct
                "No relation to gold.",
                "Atmosphere is different.",
                "Core is Earth's centre."
            ]
        );

        addQ(
            "Asexual reproduction in plants through stems is called –",
            ["pollination", "vegetative propagation", "fertilisation", "germination"],
            1,
            "No seeds.",
            "Vegetative propagation uses stem/root/leaf, e.g., potato, ginger.",
            [
                "Pollination is transfer of pollen.",
                "", // correct
                "Fertilisation is fusion of gametes.",
                "Germination is seed sprouting."
            ]
        );

        addQ(
            "What is the main function of ozone layer?",
            ["trap heat", "absorb UV rays", "produce oxygen", "cause rain"],
            1,
            "Protective layer.",
            "Ozone absorbs harmful ultraviolet radiation; without it, life would be at risk.",
            [
                "Trapping heat is greenhouse effect.",
                "", // correct
                "Oxygen is produced by photosynthesis.",
                "Rain is caused by condensation."
            ]
        );

        addQ(
            "Which of these is a threat to biodiversity?",
            ["national parks", "wildlife sanctuaries", "deforestation", "reforestation"],
            2,
            "Human destruction.",
            "Deforestation destroys habitats, reduces biodiversity.",
            [
                "National parks protect biodiversity.",
                "Wildlife sanctuaries protect.",
                "", // correct
                "Reforestation helps restore."
            ]
        );

        addQ(
            "Which is NOT a greenhouse gas?",
            ["carbon dioxide", "methane", "nitrogen", "water vapour"],
            2,
            "Main component of air.",
            "Nitrogen (78%) is not a greenhouse gas.",
            [
                "CO₂ is a greenhouse gas.",
                "Methane is a greenhouse gas.",
                "", // correct
                "Water vapour is a greenhouse gas."
            ]
        );

        addQ(
            "The solid part of Earth is called –",
            ["atmosphere", "hydrosphere", "geosphere", "biosphere"],
            2,
            "Rocks & soil.",
            "Geosphere includes crust, mantle, core.",
            [
                "Atmosphere is air.",
                "Hydrosphere is water.",
                "", // correct
                "Biosphere is life."
            ]
        );

        addQ(
            "Why does Earth have atmosphere while Mercury doesn't?",
            ["Earth is bigger with stronger gravity", "Mercury is too cold", "Sun's gravity pulls it away", "Mercury has no volcanoes"],
            0,
            "Gravity holds gases.",
            "Earth's sufficient gravity retains atmosphere; Mercury smaller, weak gravity.",
            [
                "", // correct
                "Mercury is hot, not cold.",
                "Sun's gravity affects both.",
                "Volcanoes are not the primary reason."
            ]
        );

        // ========== Electricity, Magnetism (75–87) ==========
        addQ(
            "Who discovered magnetic effect of current?",
            ["Faraday", "Oersted", "Volta", "Edison"],
            1,
            "1820 experiment.",
            "Hans Christian Oersted showed current deflects compass.",
            [
                "Faraday discovered electromagnetic induction.",
                "", // correct
                "Volta invented battery.",
                "Edison invented light bulb."
            ]
        );

        addQ(
            "An electromagnet loses its magnetism when –",
            ["current stops", "iron is removed", "both A and B", "never loses"],
            0,
            "Current stops.",
            "Electromagnet works only when current flows.",
            [
                "", // correct
                "Removing iron also reduces magnetism, but the question asks when it loses – current stopping is sufficient.",
                "Current stopping is the main reason.",
                "It does lose."
            ]
        );

        addQ(
            "Which wire is commonly used in heating elements?",
            ["copper", "aluminium", "nichrome", "iron"],
            2,
            "High resistance.",
            "Nichrome has high resistance, glows red hot.",
            [
                "Copper has low resistance.",
                "Aluminium has low resistance.",
                "", // correct
                "Iron oxidises quickly."
            ]
        );

        addQ(
            "A dry cell's positive terminal is made of –",
            ["zinc", "carbon rod", "copper", "tin"],
            1,
            "Center rod.",
            "Dry cell has carbon rod (positive), zinc case negative.",
            [
                "Zinc is negative.",
                "", // correct
                "Copper is not used.",
                "Tin is not used."
            ]
        );

        addQ(
            "In a lemon cell, the electrolyte is –",
            ["lemon juice", "copper wire", "zinc plate", "salt"],
            0,
            "Acid in lemon.",
            "Lemon juice (citric acid) acts as electrolyte; electrodes are metals.",
            [
                "", // correct
                "Copper wire is an electrode.",
                "Zinc plate is an electrode.",
                "Salt may be added but lemon juice is the electrolyte."
            ]
        );

        addQ(
            "Which effect is used in electric iron?",
            ["magnetic effect", "heating effect", "chemical effect", "electromagnetic induction"],
            1,
            "Heat.",
            "Heating effect of current: I²R.",
            [
                "Magnetic effect is used in motors.",
                "", // correct
                "Chemical effect is in batteries.",
                "Induction is used in transformers."
            ]
        );

        addQ(
            "Rechargeable batteries can be reused because –",
            ["chemical reaction reversible", "they never die", "they have infinite life", "they use magnets"],
            0,
            "Reversible chemistry.",
            "Rechargeable batteries use reversible reactions (Li-ion, lead-acid).",
            [
                "", // correct
                "They do eventually wear out.",
                "No battery has infinite life.",
                "Magnets are not involved."
            ]
        );

        addQ(
            "If current direction in electromagnet is reversed, its –",
            ["strength doubles", "poles reverse", "heating increases", "no effect"],
            1,
            "North-south swap.",
            "Reversing current reverses magnetic polarity; strength depends on current magnitude.",
            [
                "Strength depends on current, not direction.",
                "", // correct
                "Heating depends on current magnitude.",
                "It does have effect."
            ]
        );

        addQ(
            "A device that works on both magnetic and heating effect?",
            ["electric bell", "fuse", "fan", "geyser"],
            2,
            "Fan has motor (magnetic) and maybe some heat, but not primarily.",
            "Fan uses motor (magnetic effect) and may generate some heat, but primarily magnetic.",
            [
                "Electric bell uses magnetic effect only.",
                "Fuse uses heating effect only.",
                "", // correct
                "Geyser uses heating effect only."
            ]
        );

        addQ(
            "When current flows through a wire, the wire gets warm due to –",
            ["magnetic effect", "heating effect", "chemical effect", "light effect"],
            1,
            "Resistance.",
            "Heating effect: electrical energy converted to heat.",
            [
                "Magnetic effect causes deflection.",
                "", // correct
                "Chemical effect is in electrolysis.",
                "Light effect is in bulbs."
            ]
        );

        addQ(
            "A coil of wire with current and an iron core forms a –",
            ["magnet", "electromagnet", "solenoid", "cell"],
            1,
            "Core enhances.",
            "Current coil = solenoid; with iron core = electromagnet (temporary magnet).",
            [
                "It is a magnet only when current flows.",
                "", // correct
                "Solenoid is coil without core.",
                "Cell is power source."
            ]
        );

        addQ(
            "Which of these cannot be recharged?",
            ["mobile battery", "dry cell", "laptop battery", "inverter battery"],
            1,
            "Primary cell.",
            "Dry cell (Leclanché) is non-rechargeable; others are rechargeable.",
            [
                "Mobile battery is rechargeable.",
                "", // correct
                "Laptop battery is rechargeable.",
                "Inverter battery is rechargeable."
            ]
        );

        addQ(
            "To increase strength of electromagnet, you can –",
            ["increase number of turns", "increase current", "both", "use plastic core"],
            2,
            "Turns & current.",
            "Both increase magnetic field; plastic core won't help.",
            [
                "Number of turns helps, but current also matters.",
                "Current helps, but turns also matter.",
                "", // correct
                "Plastic is not ferromagnetic."
            ]
        );

        // ========== Variants (88–120) – using the detailed per‑option explanations from exp2.txt ==========
        // (These are the same as earlier variant questions, but we'll include them to reach 120)
        addQ(
            "(variant) Which of the following is a biotic component of a habitat? (sample)",
            ["Sunlight", "Water", "Tree", "Soil"],
            2,
            "Biotic means living.",
            "Trees are living organisms, hence biotic.",
            [
                "Sunlight is abiotic (non-living).",
                "Water is abiotic (non-living).",
                "",
                "Soil is abiotic (non-living)."
            ]
        );

        addQ(
            "(variant) Elephants enter human farms mainly because – (sample)",
            ["they like human company", "forests shrink and food becomes scarce", "they want to play with children", "roads attract them"],
            1,
            "Deforestation and water scarcity.",
            "Loss of forest cover and water scarcity force elephants to search for food in farms.",
            [
                "This is not backed by ecological reasons.",
                "",
                "This is not backed by ecological reasons.",
                "This is not backed by ecological reasons."
            ]
        );

        addQ(
            "(variant) What is a population in ecology? (sample)",
            ["All different organisms in a pond", "Group of the same kind of organisms in an area", "Only plants in a forest", "Birds and trees together"],
            1,
            "Same species, same area, same time.",
            "Population refers to individuals of the same species living together.",
            [
                "This describes a community (different species together).",
                "",
                "This is too narrow; population includes all organisms of one species, not just plants.",
                "This describes multiple different species, which is a community, not a population."
            ]
        );

        addQ(
            "(variant) Which gas is released during photosynthesis? (sample)",
            ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
            0,
            "Plants produce food and release this gas.",
            "Oxygen is the by-product of photosynthesis.",
            [
                "",
                "Carbon dioxide is taken in during photosynthesis, not released.",
                "Nitrogen is not directly involved in photosynthesis.",
                "Hydrogen is not released; it's part of the water molecule used in the process."
            ]
        );

        addQ(
            "(variant) A food chain always starts with – (sample)",
            ["herbivore", "carnivore", "producer", "decomposer"],
            2,
            "Who makes its own food?",
            "Green plants (producers) are the first trophic level as they convert solar energy into chemical energy.",
            [
                "Herbivores are primary consumers that eat producers, so they come second.",
                "Carnivores are secondary or tertiary consumers that eat other animals.",
                "",
                "Decomposers break down dead matter and come at the end of the food chain/web."
            ]
        );

        addQ(
            "(variant) If fish are present in a pond, dragonfly larvae are fewer because – (sample)",
            ["fish eat dragonfly larvae", "dragonflies avoid ponds", "water becomes toxic", "fish scare adult dragonflies"],
            0,
            "Fish feed on larvae.",
            "Fish prey on dragonfly larvae, controlling their population.",
            [
                "",
                "Dragonflies lay eggs in water, so they don't avoid ponds entirely.",
                "The presence of fish doesn't make water toxic.",
                "Adult dragonflies are fast fliers and not easily scared by fish; the predation is on aquatic larvae."
            ]
        );

        addQ(
            "(variant) Mushrooms and bacteria that break down dead matter are called – (sample)",
            ["producers", "herbivores", "decomposers", "parasites"],
            2,
            "They recycle nutrients.",
            "Fungi (mushrooms) and bacteria are primary decomposers that break down dead organic matter.",
            [
                "Producers (like plants) make their own food through photosynthesis.",
                "Herbivores eat plants directly.",
                "",
                "Parasites feed on living hosts, not dead matter."
            ]
        );

        addQ(
            "(variant) In the Sundarbans, mangrove forests protect by – (sample)",
            ["providing timber", "slowing down winds and waves", "attracting tourists", "increasing salt in water"],
            1,
            "They act as bio-shields.",
            "Mangroves' dense root systems reduce wave energy and wind speed, protecting coastlines from erosion and storms.",
            [
                "While they provide timber, this is not their primary protective function.",
                "",
                "Tourism is an economic benefit, not a protective one.",
                "They don't increase salinity; they are adapted to saline conditions."
            ]
        );

        addQ(
            "(variant) Which of the following is an example of mutualism? (sample)",
            ["Orchid growing on a tree", "Ticks on a dog", "Honeybee and flower", "Snake eating frog"],
            2,
            "Both benefit.",
            "Bee gets nectar (food), flower gets pollinated (reproduction) – both benefit.",
            [
                "Orchid on a tree is commensalism (orchid benefits, tree neither benefits nor harmed).",
                "Ticks on a dog is parasitism (tick benefits, dog harmed).",
                "",
                "Snake eating frog is predation (snake benefits, frog killed)."
            ]
        );

        addQ(
            "(variant) If all decomposers vanish from Earth – (sample)",
            ["soil will become more fertile", "nutrients will not recycle", "plants will grow faster", "oxygen level will increase"],
            1,
            "Who breaks down dead stuff?",
            "Decomposers break down dead matter and release nutrients back into soil. Without them, nutrients remain locked in dead bodies, and the nutrient cycle stops.",
            [
                "Soil fertility would decrease, not increase, as nutrients are not replenished.",
                "",
                "Plants would not get nutrients from soil and would die.",
                "Oxygen levels are not directly affected by decomposers."
            ]
        );

        addQ(
            "(variant) Which of these is a terrestrial ecosystem? (sample)",
            ["Pond", "Lake", "Grassland", "River"],
            2,
            "On land.",
            "Grasslands are land-based (terrestrial) ecosystems.",
            [
                "Pond is aquatic (water-based).",
                "Lake is aquatic.",
                "",
                "River is aquatic."
            ]
        );

        addQ(
            "(variant) The 'habitable zone' around a star means – (sample)",
            ["zone where space ships can land", "distance where liquid water can exist", "area with oxygen", "region with green color"],
            1,
            "Goldilocks zone.",
            "The habitable zone is the region around a star where temperatures allow liquid water to exist on a planet's surface.",
            [
                "It has nothing to do with spaceship landing.",
                "",
                "Oxygen is not a requirement for the zone definition; some planets might have liquid water without oxygen.",
                "Green color is irrelevant; it's about temperature and water."
            ]
        );

        addQ(
            "(variant) Competition in an ecosystem helps – (sample)",
            ["increase population", "maintain balance", "always harm both species", "create more food"],
            1,
            "Limited resources.",
            "Competition for limited resources (food, space, mates) prevents any one species from overpopulating and helps maintain ecological balance.",
            [
                "Competition tends to limit population growth, not increase it.",
                "",
                "While competition can be harmful, it doesn't always harm both species equally; it can lead to adaptation and niche specialization.",
                "Competition doesn't create more food; it's about争夺 existing resources."
            ]
        );

        addQ(
            "(variant) Which is a correctly matched food chain? (sample)",
            ["Grass → deer → lion", "Lion → deer → grass", "Sun → fish → bird", "Eagle → snake → grain"],
            0,
            "Start with producer.",
            "Grass (producer) is eaten by deer (primary consumer/herbivore), which is eaten by lion (secondary consumer/carnivore).",
            [
                "",
                "Lion cannot eat deer directly without deer eating grass first, and the order is reversed.",
                "Sun is not a living organism in the food chain; fish eating sun is impossible.",
                "Eagle eating snake is possible, but snake eating grain? Snakes are carnivores, they don't eat grain. Also, the chain should start with a producer (grain), but the order is wrong."
            ]
        );

        addQ(
            "(variant) The main cause of thunderstorms is – (sample)",
            ["rising warm moist air", "falling of meteorites", "earthquakes", "ocean currents"],
            0,
            "Convection.",
            "Warm, moist air rises (convection), cools, condenses into cumulonimbus clouds, leading to thunderstorms.",
            [
                "",
                "Meteorites are space rocks and have nothing to do with weather.",
                "Earthquakes are geological phenomena caused by tectonic plate movement.",
                "Ocean currents affect climate patterns but don't directly cause thunderstorms."
            ]
        );

        addQ(
            "(variant) What is the SI unit of density? (sample)",
            ["kg/m³", "kg/m²", "g/L", "N/m²"],
            0,
            "mass/volume in SI.",
            "The SI unit for mass is kg, for volume is m³, so density (mass/volume) is kg/m³.",
            [
                "",
                "kg/m² is a unit related to pressure or area density (mass per unit area), not volume density.",
                "g/L is a common unit but not the SI unit; it uses grams and litres.",
                "N/m² is Pascal, the SI unit of pressure."
            ]
        );

        addQ(
            "(variant) A solution in which no more solute can be dissolved at that temperature is called – (sample)",
            ["unsaturated", "dilute", "saturated", "concentrated"],
            2,
            "Reached its limit.",
            "A saturated solution contains the maximum amount of solute that can be dissolved at a given temperature.",
            [
                "An unsaturated solution can still dissolve more solute.",
                "Dilute means a small amount of solute relative to solvent, not necessarily at its limit.",
                "",
                "Concentrated means a large amount of solute, but it may still be unsaturated."
            ]
        );

        addQ(
            "(variant) Which of the following will sink in water? (density of water = 1 g/cm³) (sample)",
            ["wood (0.8 g/cm³)", "ice (0.92 g/cm³)", "iron (7.8 g/cm³)", "oil (0.9 g/cm³)"],
            2,
            "Density > 1 g/cm³ sinks.",
            "Iron's density (7.8) is greater than water's (1.0), so it sinks.",
            [
                "Wood (0.8) is less dense, so it floats.",
                "Ice (0.92) is less dense, so it floats (which is why ice cubes float in water).",
                "",
                "Oil (0.9) is less dense, so it floats on water."
            ]
        );

        addQ(
            "(variant) The meniscus for water in a measuring cylinder is – (sample)",
            ["curved upward", "curved downward", "straight line", "always at 45°"],
            1,
            "Water curves up at edges.",
            "Water has a concave meniscus (curves downward) because water molecules are more attracted to the glass (adhesion) than to each other (cohesion).",
            [
                "A curved upward (convex) meniscus is seen in liquids like mercury, where cohesion is stronger than adhesion.",
                "",
                "A straight line would only occur if there were no adhesive/cohesive forces, which is not the case.",
                "The meniscus shape is not fixed at 45°; it's a curve."
            ]
        );

        addQ(
            "(variant) Solubility of most solids in water generally _______ with increase in temperature. (sample)",
            ["decreases", "increases", "remains same", "first decreases then increases"],
            1,
            "Heat helps dissolve.",
            "For most solids, increasing temperature increases the kinetic energy of molecules, allowing more solute to dissolve.",
            [
                "Solubility of solids generally increases, not decreases (gases decrease with temperature).",
                "",
                "Solubility changes with temperature for most substances.",
                "While a few substances might show anomalous behavior, the general trend is an increase."
            ]
        );

        addQ(
            "(variant) 1 mL is equivalent to – (sample)",
            ["1 cm³", "1 m³", "1 dm³", "1 mm³"],
            0,
            "Volume relation.",
            "1 millilitre (mL) is exactly equal to 1 cubic centimetre (cm³).",
            [
                "",
                "1 m³ is 1,000,000 mL (or 1000 litres).",
                "1 dm³ is 1 litre, which is 1000 mL.",
                "1 mm³ is 0.001 mL (or 1 microlitre)."
            ]
        );

        addQ(
            "(variant) Which instrument is used to measure mass? (sample)",
            ["thermometer", "balance", "barometer", "measuring cylinder"],
            1,
            "Mass vs weight.",
            "A balance (like a triple beam balance or electronic balance) is used to measure mass.",
            [
                "A thermometer measures temperature.",
                "",
                "A barometer measures atmospheric pressure.",
                "A measuring cylinder measures volume."
            ]
        );

        addQ(
            "(variant) What is the relative density of a substance if its density is 2.5 g/cm³ and water density is 1 g/cm³? (sample)",
            ["2.5", "1.5", "0.4", "25"],
            0,
            "Divide by water density.",
            "Relative density = Density of substance / Density of water = 2.5 / 1 = 2.5.",
            [
                "",
                "1.5 would be the difference (2.5 - 1), not the ratio.",
                "0.4 is the reciprocal (1/2.5).",
                "25 would be if you multiplied by 10 or squared something incorrectly."
            ]
        );

        addQ(
            "(variant) When sugar dissolves in water, the mixture is – (sample)",
            ["non-uniform", "heterogeneous", "uniform", "suspension"],
            2,
            "Even distribution.",
            "Sugar dissolves completely, forming a homogeneous (uniform) mixture where sugar particles are evenly distributed at the molecular level.",
            [
                "Non-uniform and heterogeneous mean the same thing: different parts have different compositions.",
                "Heterogeneous means the same as non-uniform.",
                "",
                "A suspension has visible particles that settle over time; sugar solution does not settle."
            ]
        );

        addQ(
            "(variant) The density of a substance _______ on heating (generally). (sample)",
            ["increases", "decreases", "stays same", "may increase or decrease"],
            1,
            "Expand volume.",
            "Heating generally causes substances to expand (volume increases) while mass remains constant, so density (mass/volume) decreases.",
            [
                "Density decreases, not increases (except for water between 0-4°C).",
                "",
                "Density changes with temperature.",
                "For most substances, it consistently decreases."
            ]
        );

        addQ(
            "(variant) Which has highest density? (sample)",
            ["cold water at 4°C", "ice at 0°C", "steam at 100°C", "warm water at 50°C"],
            0,
            "Water anomaly.",
            "Water has its maximum density at 4°C due to hydrogen bonding structure.",
            [
                "",
                "Ice is less dense (0.92 g/cm³) than water, which is why it floats.",
                "Steam is water vapor, very low density.",
                "Warm water at 50°C is less dense than cold water at 4°C."
            ]
        );

        addQ(
            "(variant) ORS stands for – (sample)",
            ["Oral Rehydration Solution", "Oxygen Rich Saline", "Osmosis Relief Salt", "Organic Recovery System"],
            0,
            "Health drink.",
            "ORS is a simple mixture of sugar and salts in clean water, used to prevent and treat dehydration.",
            [
                "",
                "It has nothing to do with oxygen.",
                "It's not about relieving osmosis specifically, though it works through osmosis.",
                "It's not an organic system; it's a medical solution."
            ]
        );

        addQ(
            "(variant) Which of these is a gaseous solution? (sample)",
            ["air", "soda water", "oxygen", "brass"],
            0,
            "Gas in gas.",
            "Air is a homogeneous mixture (solution) of gases, primarily nitrogen and oxygen.",
            [
                "",
                "Soda water is a gas (CO₂) dissolved in a liquid (water) – a liquid solution.",
                "Oxygen is a pure element, not a mixture.",
                "Brass is a solid solution (alloy) of copper and zinc."
            ]
        );

        addQ(
            "(variant) Which one is an element? (sample)",
            ["Water", "Salt", "Oxygen", "Sugar"],
            2,
            "Cannot be broken further.",
            "Oxygen (O₂) is an element, consisting of only one type of atom.",
            [
                "Water (H₂O) is a compound of hydrogen and oxygen.",
                "Salt (NaCl) is a compound of sodium and chlorine.",
                "",
                "Sugar (C₁₂H₂₂O₁₁) is a compound of carbon, hydrogen, and oxygen."
            ]
        );

        addQ(
            "(variant) Brass is a mixture of – (sample)",
            ["copper and zinc", "copper and tin", "iron and carbon", "aluminium and magnesium"],
            0,
            "Alloy.",
            "Brass is an alloy primarily composed of copper and zinc.",
            [
                "",
                "Copper and tin make bronze, not brass.",
                "Iron and carbon make steel.",
                "Aluminium and magnesium are used in other alloys but not brass."
            ]
        );

        addQ(
            "(variant) A pure substance has – (sample)",
            ["variable composition", "only one type of particle", "two or more compounds", "visible different parts"],
            1,
            "Homogeneous matter.",
            "A pure substance (element or compound) is made of only one kind of particle (atoms or molecules) with a fixed composition.",
            [
                "Variable composition is a property of mixtures.",
                "",
                "Two or more compounds describe a mixture.",
                "Visible different parts describe a heterogeneous mixture."
            ]
        );

        addQ(
            "(variant) Passing electric current through water gives – (sample)",
            ["oxygen and hydrogen", "hydrogen and chlorine", "nitrogen and oxygen", "only oxygen"],
            0,
            "Electrolysis.",
            "Electrolysis of water splits H₂O molecules into hydrogen gas (at the cathode) and oxygen gas (at the anode).",
            [
                "",
                "Chlorine is not present in pure water; it would come from saltwater electrolysis.",
                "Nitrogen is not a component of water.",
                "Both gases are produced, not just oxygen."
            ]
        );

        addQ(
            "(variant) Which is a compound? (sample)",
            ["Iron sulfide", "Iron filings", "Sulfur powder", "Air"],
            0,
            "Chemically bonded.",
            "Iron sulfide (FeS) is a compound where iron and sulfur are chemically bonded in a fixed ratio.",
            [
                "",
                "Iron filings are the pure element iron, just in small pieces.",
                "Sulfur powder is the pure element sulfur.",
                "Air is a mixture of gases, not a chemically combined compound."
            ]
        );

        return bank; // should be exactly 120
    }

    const fullBank = buildQuestionBank(); // 120 entries
    let quizQuestions = [];
    let currentQ = 0;
    let userAnswers = new Array(120).fill(null);
    let score = 0;

    // DOM elements
    const questionEl = document.getElementById('questionText');
    const optionsEl = document.getElementById('optionsContainer');
    const hintSpan = document.getElementById('hintText');
    const explanationDiv = document.getElementById('explanationContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const restartBtn = document.getElementById('restartBtn');
    const liveScoreSpan = document.getElementById('liveScore');
    const qCounterSpan = document.getElementById('qCounter');
    const qStatusSpan = document.getElementById('qStatus');
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // theme
    themeToggle.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const theme = e.target.dataset.theme;
            document.querySelectorAll('.theme-toggle button').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            if (theme === 'dark') body.classList.add('dark');
            else body.classList.remove('dark');
        }
    });

    function shuffleArray(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }

    function restartQuiz() {
        quizQuestions = shuffleArray([...fullBank]);
        userAnswers = new Array(120).fill(null);
        score = 0;
        currentQ = 0;
        updateScore();
        renderQuestion();
    }

    function updateScore() {
        liveScoreSpan.innerText = score;
    }

    function renderQuestion() {
        const q = quizQuestions[currentQ];
        questionEl.innerText = q.question;
        hintSpan.innerText = q.hint;
        // generate options
        let htmlStr = '';
        q.options.forEach((opt, idx) => {
            let extraClass = '';
            if (userAnswers[currentQ] !== null) {
                if (idx === q.answer) extraClass = ' correct';
                else if (userAnswers[currentQ] === idx) extraClass = ' wrong';
            }
            htmlStr += `<div class="option${extraClass}" data-opt-index="${idx}">${opt}</div>`;
        });
        optionsEl.innerHTML = htmlStr;

        if (userAnswers[currentQ] !== null) {
            document.querySelectorAll('.option').forEach(opt => opt.classList.add('disabled-opt'));
            const selectedIdx = userAnswers[currentQ];
            const isCorrect = (selectedIdx === q.answer);
            if (isCorrect) {
                explanationDiv.innerText = `✅ correct! ${q.correctExp}`;
            } else {
                // Show the specific explanation for the selected wrong option
                explanationDiv.innerText = `❌ oops! you chose '${q.options[selectedIdx]}'. ${q.wrongExps[selectedIdx]}`;
            }
            explanationDiv.style.display = 'block';
        } else {
            explanationDiv.style.display = 'none';
            document.querySelectorAll('.option').forEach(opt => {
                opt.addEventListener('click', (e) => {
                    if (userAnswers[currentQ] !== null) return;
                    const selected = parseInt(e.target.dataset.optIndex);
                    const isCorrect = (selected === q.answer);
                    userAnswers[currentQ] = selected;
                    if (isCorrect) score++;
                    updateScore();
                    renderQuestion();
                });
            });
        }

        qCounterSpan.innerText = `question ${currentQ+1} / 120`;
        qStatusSpan.innerText = (userAnswers[currentQ] !== null) ? '✅ answered' : '⏳ pending';
        prevBtn.disabled = (currentQ === 0);
        nextBtn.disabled = (currentQ === 119);
    }

    prevBtn.addEventListener('click', () => {
        if (currentQ > 0) {
            currentQ--;
            renderQuestion();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentQ < 119) {
            currentQ++;
            renderQuestion();
        }
    });

    restartBtn.addEventListener('click', restartQuiz);

    // initial load
    restartQuiz();
})();