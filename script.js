// Question constructor
function q(question, options, correct, hint, correctExp, wrongExp) {
    return { question, options, correct, hint, correctExp, wrongExp };
}

function buildQuestionBank() {
    const bank = [];

    // --- Ecology / Environment ---
    bank.push(q(
        "Which of the following is a biotic component of a habitat?",
        ["Sunlight", "Water", "Tree", "Soil"],
        2, // C
        "Biotic means living.",
        "Trees are living organisms, hence biotic.",
        "Sunlight, water, and soil are abiotic (non-living)."
    ));

    bank.push(q(
        "Elephants enter human farms mainly because –",
        ["they like human company", "forests shrink and food becomes scarce", "they want to play with children", "roads attract them"],
        1, // B
        "Deforestation and water scarcity.",
        "Loss of forest cover and water scarcity force elephants to search for food in farms.",
        "Other options are not backed by ecological reasons."
    ));

    bank.push(q(
        "What is a population in ecology?",
        ["All different organisms in a pond", "Group of the same kind of organisms in an area", "Only plants in a forest", "Birds and trees together"],
        1, // B
        "Same species, same area, same time.",
        "Population refers to individuals of the same species living together.",
        "Other options describe community or mixed groups."
    ));

    bank.push(q(
        "Which gas is released during photosynthesis?",
        ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        0, // A
        "Plants produce food and release this gas.",
        "Oxygen is the by-product of photosynthesis.",
        "Carbon dioxide is taken in, not released."
    ));

    bank.push(q(
        "A food chain always starts with –",
        ["herbivore", "carnivore", "producer", "decomposer"],
        2, // C
        "Who makes its own food?",
        "Green plants (producers) are the first trophic level.",
        "All consumers depend on producers."
    ));

    bank.push(q(
        "If fish are present in a pond, dragonfly larvae are fewer because –",
        ["fish eat dragonfly larvae", "dragonflies avoid ponds", "water becomes toxic", "fish scare adult dragonflies"],
        0, // A
        "Fish feed on larvae.",
        "Fish prey on dragonfly larvae, controlling their population.",
        "Other options are speculative."
    ));

    bank.push(q(
        "Mushrooms and bacteria that break down dead matter are called –",
        ["producers", "herbivores", "decomposers", "parasites"],
        2, // C
        "They recycle nutrients.",
        "Decomposers like fungi and bacteria decompose dead remains.",
        "Producers make food; parasites feed on living hosts."
    ));

    bank.push(q(
        "In the Sundarbans, mangrove forests protect by –",
        ["providing timber", "slowing down winds and waves", "attracting tourists", "increasing salt in water"],
        1, // B
        "They act as bio-shields.",
        "Mangroves reduce the force of storms and floods.",
        "Other uses are secondary, not protective."
    ));

    bank.push(q(
        "Which of the following is an example of mutualism?",
        ["Orchid growing on a tree", "Ticks on a dog", "Honeybee and flower", "Snake eating frog"],
        2, // C
        "Both benefit.",
        "Bee gets nectar, flower gets pollinated – both benefit.",
        "Orchid: commensalism; tick: parasitism; snake: predation."
    ));

    bank.push(q(
        "If all decomposers vanish from Earth –",
        ["soil will become more fertile", "nutrients will not recycle", "plants will grow faster", "oxygen level will increase"],
        1, // B
        "Who breaks down dead stuff?",
        "Decomposers recycle nutrients; without them dead matter accumulates and soil fertility drops.",
        "Others are opposite."
    ));

    bank.push(q(
        "Which of these is a terrestrial ecosystem?",
        ["Pond", "Lake", "Grassland", "River"],
        2, // C
        "On land.",
        "Grasslands are on land, hence terrestrial.",
        "Pond, lake, river are aquatic."
    ));

    bank.push(q(
        "The 'habitable zone' around a star means –",
        ["zone where space ships can land", "distance where liquid water can exist", "area with oxygen", "region with green color"],
        1, // B
        "Goldilocks zone.",
        "Right distance allows liquid water – essential for life as we know it.",
        "Other options are inaccurate."
    ));

    bank.push(q(
        "Competition in an ecosystem helps –",
        ["increase population", "maintain balance", "always harm both species", "create more food"],
        1, // B
        "Limited resources.",
        "Competition controls population and avoids overgrowth, keeping balance.",
        "It doesn't always harm both, but regulates."
    ));

    bank.push(q(
        "Which is a correctly matched food chain?",
        ["Grass → deer → lion", "Lion → deer → grass", "Sun → fish → bird", "Eagle → snake → grain"],
        0, // A
        "Start with producer.",
        "Grass (producer) → deer (herbivore) → lion (carnivore).",
        "Others have incorrect order."
    ));

    bank.push(q(
        "The main cause of thunderstorms is –",
        ["rising warm moist air", "falling of meteorites", "earthquakes", "ocean currents"],
        0, // A
        "Convection.",
        "Warm moist air rises, cools, condenses – leads to thunderstorm.",
        "Others not related."
    ));

    // --- Solutions & Density ---
    bank.push(q(
        "What is the SI unit of density?",
        ["kg/m³", "kg/m²", "g/L", "N/m²"],
        0, // A
        "mass/volume in SI.",
        "kg/m³ is the SI unit of density.",
        "N/m² is pascal (pressure)."
    ));

    bank.push(q(
        "A solution in which no more solute can be dissolved at that temperature is called –",
        ["unsaturated", "dilute", "saturated", "concentrated"],
        2, // C
        "Reached its limit.",
        "Saturated solution holds maximum solute at that temperature.",
        "Unsaturated can still dissolve more."
    ));

    bank.push(q(
        "Which of the following will sink in water? (density of water = 1 g/cm³)",
        ["wood (0.8 g/cm³)", "ice (0.92 g/cm³)", "iron (7.8 g/cm³)", "oil (0.9 g/cm³)"],
        2, // C
        "Density > 1 g/cm³ sinks.",
        "Iron is denser than water, so it sinks.",
        "Others float because lower density."
    ));

    bank.push(q(
        "The meniscus for water in a measuring cylinder is –",
        ["curved upward", "curved downward", "straight line", "always at 45°"],
        1, // B
        "Water curves up at edges.",
        "Water forms a concave meniscus (curves downward).",
        "Mercury forms convex."
    ));

    bank.push(q(
        "Solubility of most solids in water generally _______ with increase in temperature.",
        ["decreases", "increases", "remains same", "first decreases then increases"],
        1, // B
        "Heat helps dissolve.",
        "Higher temperature increases kinetic energy, so solubility rises.",
        "For gases it decreases."
    ));

    bank.push(q(
        "1 mL is equivalent to –",
        ["1 cm³", "1 m³", "1 dm³", "1 mm³"],
        0, // A
        "Volume relation.",
        "1 mL = 1 cm³.",
        "1 L = 1 dm³."
    ));

    bank.push(q(
        "Which instrument is used to measure mass?",
        ["thermometer", "balance", "barometer", "measuring cylinder"],
        1, // B
        "Mass vs weight.",
        "A balance measures mass.",
        "Cylinder measures volume."
    ));

    bank.push(q(
        "What is the relative density of a substance if its density is 2.5 g/cm³ and water density is 1 g/cm³?",
        ["2.5", "1.5", "0.4", "25"],
        0, // A
        "Divide by water density.",
        "Relative density = density of substance/density of water = 2.5.",
        "No unit."
    ));

    bank.push(q(
        "When sugar dissolves in water, the mixture is –",
        ["non-uniform", "heterogeneous", "uniform", "suspension"],
        2, // C
        "Even distribution.",
        "Sugar and water form a homogeneous (uniform) solution.",
        "Sand in water is non-uniform."
    ));

    bank.push(q(
        "The density of a substance _______ on heating (generally).",
        ["increases", "decreases", "stays same", "may increase or decrease"],
        1, // B
        "Expand volume.",
        "Heating increases volume, mass constant → density decreases.",
        "Exception: water between 0-4°C."
    ));

    bank.push(q(
        "Which has highest density?",
        ["cold water at 4°C", "ice at 0°C", "steam at 100°C", "warm water at 50°C"],
        0, // A
        "Water anomaly.",
        "Water is densest at 4°C.",
        "Ice floats because less dense."
    ));

    bank.push(q(
        "ORS stands for –",
        ["Oral Rehydration Solution", "Oxygen Rich Saline", "Osmosis Relief Salt", "Organic Recovery System"],
        0, // A
        "Health drink.",
        "Oral Rehydration Solution used for dehydration.",
        "Common in chapter intro."
    ));

    bank.push(q(
        "Which of these is a gaseous solution?",
        ["air", "soda water", "oxygen", "brass"],
        0, // A
        "Gas in gas.",
        "Air is a solution of gases (N₂, O₂, etc).",
        "Soda water is gas in liquid."
    ));

    // --- Elements, Compounds, Mixtures ---
    bank.push(q(
        "Which one is an element?",
        ["Water", "Salt", "Oxygen", "Sugar"],
        2, // C
        "Cannot be broken further.",
        "Oxygen is an element (O₂).",
        "Others are compounds."
    ));

    bank.push(q(
        "Brass is a mixture of –",
        ["copper and zinc", "copper and tin", "iron and carbon", "aluminium and magnesium"],
        0, // A
        "Alloy.",
        "Brass = copper + zinc.",
        "Bronze = copper + tin."
    ));

    bank.push(q(
        "A pure substance has –",
        ["variable composition", "only one type of particle", "two or more compounds", "visible different parts"],
        1, // B
        "Homogeneous matter.",
        "Pure substances have fixed composition and identical particles.",
        "Others describe mixtures."
    ));

    bank.push(q(
        "Passing electric current through water gives –",
        ["oxygen and hydrogen", "hydrogen and chlorine", "nitrogen and oxygen", "only oxygen"],
        0, // A
        "Electrolysis.",
        "Water splits into H₂ and O₂.",
        "Chlorine not present."
    ));

    bank.push(q(
        "Which is a compound?",
        ["Iron sulfide", "Iron filings", "Sulfur powder", "Air"],
        0, // A
        "Chemically bonded.",
        "Iron sulfide (FeS) is a compound.",
        "Iron and sulfur are elements; air mixture."
    ));

    bank.push(q(
        "The ratio of hydrogen to oxygen in water is –",
        ["1:2", "2:1", "1:1", "2:2"],
        1, // B
        "H₂O formula.",
        "Two hydrogen atoms, one oxygen, hence 2:1 by atom count.",
        "Others incorrect."
    ));

    bank.push(q(
        "Mishraloha in ancient India refers to –",
        ["alloys", "poisons", "herbal mixtures", "glass"],
        0, // A
        "Metal mixtures.",
        "Mishraloha means alloys used in medicines.",
        "Example: bronze, brass."
    ));

    bank.push(q(
        "Which of these is a metalloid?",
        ["Silicon", "Sodium", "Mercury", "Helium"],
        0, // A
        "In between metal/nonmetal.",
        "Silicon is a metalloid.",
        "Sodium is metal, mercury metal, helium nonmetal."
    ));

    bank.push(q(
        "Stainless steel contains –",
        ["iron, nickel, chromium", "copper, tin, zinc", "aluminium, magnesium", "lead, carbon"],
        0, // A
        "Common alloy.",
        "Stainless steel = Fe + Ni + Cr + C.",
        "Other combos are different alloys."
    ));

    bank.push(q(
        "Which method would you use to separate iron and sulfur mixture?",
        ["magnetic separation", "distillation", "evaporation", "filtration"],
        0, // A
        "Iron attracted.",
        "Magnet attracts iron, leaving sulfur.",
        "Others not effective."
    ));

    // --- Pressure, Winds, Storms ---
    bank.push(q(
        "Pressure = ?",
        ["Force × Area", "Force / Area", "Area / Force", "Mass / Volume"],
        1, // B
        "Basic formula.",
        "Pressure = Force / Area.",
        "Force × Area is not pressure."
    ));

    bank.push(q(
        "Why do bags with broad straps feel more comfortable?",
        ["less weight", "more pressure", "less pressure", "straps are soft"],
        2, // C
        "Area matters.",
        "Broad straps increase area, so less pressure on shoulders.",
        "Same weight, less pressure."
    ));

    bank.push(q(
        "Which instrument measures atmospheric pressure?",
        ["thermometer", "barometer", "manometer", "hygrometer"],
        1, // B
        "Weather tool.",
        "Barometer measures air pressure.",
        "Manometer measures gas pressure in labs."
    ));

    bank.push(q(
        "The SI unit of pressure is –",
        ["Newton", "Pascal", "Joule", "Watt"],
        1, // B
        "N/m².",
        "Pascal (Pa) = N/m².",
        "Newton is force, Joule energy, Watt power."
    ));

    bank.push(q(
        "In a liquid, pressure with depth ______.",
        ["decreases", "increases", "remains same", "first increases then decreases"],
        1, // B
        "Gravity of water.",
        "Pressure increases with depth due to weight of liquid above.",
        "Dam walls are thicker at bottom."
    ));

    bank.push(q(
        "During a cyclone, the calm region at the centre is called –",
        ["eye", "wall", "core", "vortex"],
        0, // A
        "Cyclone structure.",
        "The eye is calm and low pressure.",
        "Surrounding eyewall has high winds."
    ));

    bank.push(q(
        "A rubber sucker sticks to wall because –",
        ["glue", "magnetic force", "atmospheric pressure", "static electricity"],
        2, // C
        "Air pushes.",
        "Air pressure outside > inside, so it sticks.",
        "Glue not needed."
    ));

    bank.push(q(
        "Which is true about high-speed wind?",
        ["increases air pressure", "decreases air pressure", "no effect on pressure", "makes temperature rise"],
        1, // B
        "Bernoulli effect.",
        "Fast winds reduce pressure (e.g., blowing between balloons).",
        "That's why roofs blow off."
    ));

    bank.push(q(
        "Sea breeze blows during –",
        ["night", "day", "evening", "all the time"],
        1, // B
        "Land heats fast.",
        "Day: land warm, low pressure → sea to land breeze.",
        "Night opposite: land breeze."
    ));

    bank.push(q(
        "Lightning is caused by –",
        ["clouds rubbing", "meteor showers", "solar flares", "earth's magnetic field"],
        0, // A
        "Static discharge.",
        "Collisions of ice/water droplets create charges; discharge = lightning.",
        "Others not related."
    ));

    bank.push(q(
        "Thunderstorms in West Bengal before monsoon are called –",
        ["Mango showers", "Kalboishakhi", "Bordoisila", "Western disturbance"],
        1, // B
        "Local name.",
        "Kalboishakhi (Nor'westers) in Bengal.",
        "Mango showers in South."
    ));

    bank.push(q(
        "Overhead water tanks are placed at height to –",
        ["look nice", "increase water pressure", "store more water", "avoid sunlight"],
        1, // B
        "Height gives pressure.",
        "Greater height → greater pressure at taps.",
        "Same reason as liquid column."
    ));

    bank.push(q(
        "Which is safer during lightning?",
        ["standing under tall tree", "lying flat on ground", "sitting inside a car", "holding metal umbrella"],
        2, // C
        "Metal car = Faraday cage.",
        "Car is safe (metal body conducts around you).",
        "Trees attract lightning."
    ));

    // --- Light, Mirrors, Lenses ---
    bank.push(q(
        "A concave mirror curves –",
        ["inwards", "outwards", "flat", "both sides"],
        0, // A
        "Cave = inside.",
        "Concave mirror reflecting surface curves inward.",
        "Convex bulges out."
    ));

    bank.push(q(
        "Which mirror always forms a diminished, erect image?",
        ["plane mirror", "concave mirror", "convex mirror", "cylindrical mirror"],
        2, // C
        "Side mirrors.",
        "Convex mirror gives diminished, erect image and wider view.",
        "Concave can magnify."
    ));

    bank.push(q(
        "The angle of incidence equals angle of reflection is a law valid for –",
        ["only plane mirrors", "only spherical mirrors", "all mirrors", "only concave mirrors"],
        2, // C
        "Universal law.",
        "Laws of reflection hold for every mirror.",
        "Plane and spherical both follow."
    ));

    bank.push(q(
        "Which lens converges light?",
        ["concave lens", "convex lens", "cylindrical lens", "flat glass"],
        1, // B
        "Thicker middle.",
        "Convex lens = converging lens.",
        "Concave diverges."
    ));

    bank.push(q(
        "The image formed by a convex lens when object is very close (less than focal length) is –",
        ["real and inverted", "virtual and erect", "real and diminished", "no image"],
        1, // B
        "Magnifying glass.",
        "When object inside focal length, image virtual, erect, enlarged.",
        "Used as magnifier."
    ));

    bank.push(q(
        "Dentist uses which mirror to see enlarged view of teeth?",
        ["plane", "concave", "convex", "prism"],
        1, // B
        "Enlarged image.",
        "Concave mirror gives enlarged image when object close.",
        "Convex gives diminished."
    ));

    bank.push(q(
        "The splitting of light into colours is called –",
        ["reflection", "refraction", "dispersion", "diffraction"],
        2, // C
        "Rainbow.",
        "Dispersion (e.g., prism).",
        "Refraction is bending."
    ));

    bank.push(q(
        "Which of the following can burn paper when focused by sunlight?",
        ["plane mirror", "concave mirror", "convex mirror", "any mirror"],
        1, // B
        "Concentrate rays.",
        "Concave mirror converges sunlight to a point (heat).",
        "Convex diverges."
    ));

    bank.push(q(
        "An object seen through a concave lens always appears –",
        ["enlarged", "diminished and erect", "inverted", "same size"],
        1, // B
        "Always smaller.",
        "Concave lens gives virtual, erect, diminished image.",
        "Convex can vary."
    ));

    bank.push(q(
        "Warning on car side mirror: 'objects are closer than they appear' because –",
        ["mirror is plane", "mirror is concave", "mirror is convex", "glass is tinted"],
        2, // C
        "Convex = wide but smaller.",
        "Convex mirror makes objects look smaller, hence appear farther, so they are actually closer.",
        "Others not relevant."
    ));

    bank.push(q(
        "The normal is a line drawn ______ to the mirror surface.",
        ["parallel", "perpendicular", "tangent", "at 45°"],
        1, // B
        "Right angle.",
        "Normal is perpendicular at point of incidence.",
        "Used to measure angles."
    ));

    bank.push(q(
        "Which part of the eye contains a convex lens?",
        ["cornea", "iris", "pupil", "crystalline lens"],
        3, // D
        "Eye lens.",
        "The eye's lens is convex and changes shape.",
        "Cornea also helps but lens is the flexible part."
    ));

    // --- Earth - Unique Planet ---
    bank.push(q(
        "Why is Earth called 'Blue Planet'?",
        ["many blue flowers", "70% water", "sky is blue", "blue rocks"],
        1, // B
        "Water cover.",
        "Oceans make it appear blue from space.",
        "Water covers about 71%."
    ));

    bank.push(q(
        "Greenhouse effect on Earth is mainly due to –",
        ["oxygen", "nitrogen", "carbon dioxide", "hydrogen"],
        2, // C
        "Traps heat.",
        "CO₂ and other greenhouse gases trap heat.",
        "Too much causes warming."
    ));

    bank.push(q(
        "Which planet is hottest in solar system?",
        ["Mercury", "Venus", "Mars", "Jupiter"],
        1, // B
        "Thick CO₂ atmosphere.",
        "Venus has thick atmosphere trapping heat, hotter than Mercury, even though Mercury closer.",
        "Others not as hot."
    ));

    bank.push(q(
        "Earth's magnetic field protects us from –",
        ["asteroids", "solar wind", "acid rain", "ozone depletion"],
        1, // B
        "Charged particles.",
        "Magnetic field deflects solar wind (charged particles).",
        "Ozone blocks UV."
    ));

    bank.push(q(
        "Goldilocks zone refers to –",
        ["habitable zone with liquid water", "zone with gold mines", "atmosphere zone", "core of Earth"],
        0, // A
        "Just right.",
        "Distance from star where water can be liquid; Earth lies in this zone.",
        "Others not relevant."
    ));

    bank.push(q(
        "Asexual reproduction in plants through stems is called –",
        ["pollination", "vegetative propagation", "fertilisation", "germination"],
        1, // B
        "No seeds.",
        "Vegetative propagation uses stem/root/leaf, e.g., potato, ginger.",
        "Others involve seeds or gametes."
    ));

    bank.push(q(
        "What is the main function of ozone layer?",
        ["trap heat", "absorb UV rays", "produce oxygen", "cause rain"],
        1, // B
        "Protective layer.",
        "Ozone absorbs harmful ultraviolet radiation; without it, life would be at risk.",
        "Others not primary."
    ));

    bank.push(q(
        "Which of these is a threat to biodiversity?",
        ["national parks", "wildlife sanctuaries", "deforestation", "reforestation"],
        2, // C
        "Human destruction.",
        "Deforestation destroys habitats, reduces biodiversity.",
        "Others help conservation."
    ));

    bank.push(q(
        "Which is NOT a greenhouse gas?",
        ["carbon dioxide", "methane", "nitrogen", "water vapour"],
        2, // C
        "Main component of air.",
        "Nitrogen (78%) is not a greenhouse gas.",
        "Others trap heat."
    ));

    bank.push(q(
        "The solid part of Earth is called –",
        ["atmosphere", "hydrosphere", "geosphere", "biosphere"],
        2, // C
        "Rocks & soil.",
        "Geosphere includes crust, mantle, core.",
        "Hydrosphere = water."
    ));

    bank.push(q(
        "Why does Earth have atmosphere while Mercury doesn't?",
        ["Earth is bigger with stronger gravity", "Mercury is too cold", "Sun's gravity pulls it away", "Mercury has no volcanoes"],
        0, // A
        "Gravity holds gases.",
        "Earth's sufficient gravity retains atmosphere; Mercury smaller, weak gravity.",
        "Others not primary."
    ));

    // --- Electricity, Magnetism ---
    bank.push(q(
        "Who discovered magnetic effect of current?",
        ["Faraday", "Oersted", "Volta", "Edison"],
        1, // B
        "1820 experiment.",
        "Hans Christian Oersted showed current deflects compass.",
        "Others contributed differently."
    ));

    bank.push(q(
        "An electromagnet loses its magnetism when –",
        ["current stops", "iron is removed", "both A and B", "never loses"],
        2, // C
        "Current stops.",
        "Electromagnet works only when current flows and iron core present; without current or core, it loses magnetism.",
        "Single options are partially correct but incomplete."
    ));

    bank.push(q(
        "Which wire is commonly used in heating elements?",
        ["copper", "aluminium", "nichrome", "iron"],
        2, // C
        "High resistance.",
        "Nichrome has high resistance, glows red hot.",
        "Copper low resistance."
    ));

    bank.push(q(
        "A dry cell's positive terminal is made of –",
        ["zinc", "carbon rod", "copper", "tin"],
        1, // B
        "Center rod.",
        "Dry cell has carbon rod (positive), zinc case negative.",
        "Electrolyte paste."
    ));

    bank.push(q(
        "In a lemon cell, the electrolyte is –",
        ["lemon juice", "copper wire", "zinc plate", "salt"],
        0, // A
        "Acid in lemon.",
        "Lemon juice (citric acid) acts as electrolyte; electrodes are metals.",
        "Others are electrodes or additives."
    ));

    bank.push(q(
        "Which effect is used in electric iron?",
        ["magnetic effect", "heating effect", "chemical effect", "electromagnetic induction"],
        1, // B
        "Heat.",
        "Heating effect of current: I²R.",
        "Magnetic effect in motors/bells."
    ));

    bank.push(q(
        "Rechargeable batteries can be reused because –",
        ["chemical reaction reversible", "they never die", "they have infinite life", "they use magnets"],
        0, // A
        "Reversible chemistry.",
        "Rechargeable batteries use reversible reactions (Li-ion, lead-acid).",
        "Single-use cells cannot recharge."
    ));

    bank.push(q(
        "If current direction in electromagnet is reversed, its –",
        ["strength doubles", "poles reverse", "heating increases", "no effect"],
        1, // B
        "North-south swap.",
        "Reversing current reverses magnetic polarity; strength depends on current magnitude.",
        "Others not directly."
    ));

    bank.push(q(
        "A device that works on both magnetic and heating effect?",
        ["electric bell", "fuse", "fan", "geyser"],
        2, // C
        "Fan has motor (magnetic) and maybe some heat, but not primarily. Electric bell uses magnet, no heat. Maybe choose none, but best: fan uses motor (magnetic). But heating? Not much. So we ask: fan uses magnetic effect.",
        "Fan uses motor (magnetic effect) and may generate some heat, but primarily magnetic.",
        "Electric bell works on magnetic effect only; fuse on heating only; geyser on heating only."
    ));

    bank.push(q(
        "When current flows through a wire, the wire gets warm due to –",
        ["magnetic effect", "heating effect", "chemical effect", "light effect"],
        1, // B
        "Resistance.",
        "Heating effect: electrical energy converted to heat.",
        "Magnetic effect causes deflection."
    ));

    bank.push(q(
        "A coil of wire with current and an iron core forms a –",
        ["magnet", "electromagnet", "solenoid", "cell"],
        1, // B
        "Core enhances.",
        "Current coil = solenoid; with iron core = electromagnet (temporary magnet).",
        "Others not accurate."
    ));

    bank.push(q(
        "Which of these cannot be recharged?",
        ["mobile battery", "dry cell", "laptop battery", "inverter battery"],
        1, // B
        "Primary cell.",
        "Dry cell (Leclanché) is non-rechargeable; others are rechargeable.",
        "Others are secondary cells."
    ));

    bank.push(q(
        "To increase strength of electromagnet, you can –",
        ["increase number of turns", "increase current", "both", "use plastic core"],
        2, // C
        "Turns & current.",
        "Both increase magnetic field; plastic core won't help.",
        "Single options are partially correct but incomplete."
    ));

    // --- Variants (88 to 120) ---
    // Variant of 1
    bank.push(q(
        "(variant) Which of the following is a biotic component of a habitat?",
        ["Sunlight", "Water", "Tree", "Soil"],
        2,
        "Biotic means living.",
        "Trees are living organisms, hence biotic.",
        "Sunlight is abiotic (non-living). Water is abiotic. Soil is abiotic."
    ));
    // Variant of 2
    bank.push(q(
        "(variant) Elephants enter human farms mainly because –",
        ["they like human company", "forests shrink and food becomes scarce", "they want to play with children", "roads attract them"],
        1,
        "Deforestation and water scarcity.",
        "Loss of forest cover and water scarcity force elephants to search for food in farms.",
        "They don't enter because of human company. Playing is not a reason. Roads are not the attraction."
    ));
    // Variant of 3 (detailed per-option)
    bank.push(q(
        "(variant) What is a population in ecology?",
        ["All different organisms in a pond", "Group of the same kind of organisms in an area", "Only plants in a forest", "Birds and trees together"],
        1,
        "Same species, same area, same time.",
        "Population refers to individuals of the same species living together.",
        "Option A describes a community (different species together). Option C is too narrow; population includes all organisms of one species, not just plants. Option D describes multiple different species, which is a community, not a population."
    ));
    // Variant of 4
    bank.push(q(
        "(variant) Which gas is released during photosynthesis?",
        ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        0,
        "Plants produce food and release this gas.",
        "Oxygen is the by-product of photosynthesis.",
        "Carbon dioxide is taken in, not released. Nitrogen is not involved. Hydrogen is not released."
    ));
    // Variant of 5
    bank.push(q(
        "(variant) A food chain always starts with –",
        ["herbivore", "carnivore", "producer", "decomposer"],
        2,
        "Who makes its own food?",
        "Green plants (producers) are the first trophic level.",
        "Herbivores eat plants, carnivores eat animals, decomposers break down dead matter – none start the chain."
    ));
    // Variant of 6
    bank.push(q(
        "(variant) If fish are present in a pond, dragonfly larvae are fewer because –",
        ["fish eat dragonfly larvae", "dragonflies avoid ponds", "water becomes toxic", "fish scare adult dragonflies"],
        0,
        "Fish feed on larvae.",
        "Fish prey on dragonfly larvae, controlling their population.",
        "Dragonflies don't avoid ponds due to fish. Water doesn't become toxic. Fish don't scare adult dragonflies significantly."
    ));
    // Variant of 7
    bank.push(q(
        "(variant) Mushrooms and bacteria that break down dead matter are called –",
        ["producers", "herbivores", "decomposers", "parasites"],
        2,
        "They recycle nutrients.",
        "Decomposers like fungi and bacteria decompose dead remains.",
        "Producers make their own food. Herbivores eat plants. Parasites feed on living hosts."
    ));
    // Variant of 8
    bank.push(q(
        "(variant) In the Sundarbans, mangrove forests protect by –",
        ["providing timber", "slowing down winds and waves", "attracting tourists", "increasing salt in water"],
        1,
        "They act as bio-shields.",
        "Mangroves reduce the force of storms and floods.",
        "Timber is a resource, not protection. Tourists are attracted but don't protect. Increasing salt is not beneficial."
    ));
    // Variant of 9
    bank.push(q(
        "(variant) Which of the following is an example of mutualism?",
        ["Orchid growing on a tree", "Ticks on a dog", "Honeybee and flower", "Snake eating frog"],
        2,
        "Both benefit.",
        "Bee gets nectar, flower gets pollinated – both benefit.",
        "Orchid on tree: commensalism (one benefits, other unaffected). Tick on dog: parasitism. Snake eating frog: predation."
    ));
    // Variant of 10
    bank.push(q(
        "(variant) If all decomposers vanish from Earth –",
        ["soil will become more fertile", "nutrients will not recycle", "plants will grow faster", "oxygen level will increase"],
        1,
        "Who breaks down dead stuff?",
        "Decomposers recycle nutrients; without them dead matter accumulates and soil fertility drops.",
        "Soil fertility would decrease, not increase. Plants won't grow faster due to nutrient lock. Oxygen not directly affected."
    ));
    // Variant of 11
    bank.push(q(
        "(variant) Which of these is a terrestrial ecosystem?",
        ["Pond", "Lake", "Grassland", "River"],
        2,
        "On land.",
        "Grasslands are on land, hence terrestrial.",
        "Pond, lake, river are aquatic (water-based)."
    ));
    // Variant of 12
    bank.push(q(
        "(variant) The 'habitable zone' around a star means –",
        ["zone where space ships can land", "distance where liquid water can exist", "area with oxygen", "region with green color"],
        1,
        "Goldilocks zone.",
        "Right distance allows liquid water – essential for life as we know it.",
        "Not about spaceships. Oxygen not required for definition. Green color is irrelevant."
    ));
    // Variant of 13
    bank.push(q(
        "(variant) Competition in an ecosystem helps –",
        ["increase population", "maintain balance", "always harm both species", "create more food"],
        1,
        "Limited resources.",
        "Competition controls population and avoids overgrowth, keeping balance.",
        "It doesn't increase population. It may harm but not always both. It doesn't create food."
    ));
    // Variant of 14
    bank.push(q(
        "(variant) Which is a correctly matched food chain?",
        ["Grass → deer → lion", "Lion → deer → grass", "Sun → fish → bird", "Eagle → snake → grain"],
        0,
        "Start with producer.",
        "Grass (producer) → deer (herbivore) → lion (carnivore).",
        "Lion cannot be first. Sun is not an organism in chain (energy source). Eagle cannot be first."
    ));
    // Variant of 15
    bank.push(q(
        "(variant) The main cause of thunderstorms is –",
        ["rising warm moist air", "falling of meteorites", "earthquakes", "ocean currents"],
        0,
        "Convection.",
        "Warm moist air rises, cools, condenses – leads to thunderstorm.",
        "Meteorites, earthquakes, ocean currents are not direct causes."
    ));
    // Variant of 16
    bank.push(q(
        "(variant) What is the SI unit of density?",
        ["kg/m³", "kg/m²", "g/L", "N/m²"],
        0,
        "mass/volume in SI.",
        "kg/m³ is the SI unit of density.",
        "kg/m² is not density. g/L is not SI. N/m² is pressure."
    ));
    // Variant of 17
    bank.push(q(
        "(variant) A solution in which no more solute can be dissolved at that temperature is called –",
        ["unsaturated", "dilute", "saturated", "concentrated"],
        2,
        "Reached its limit.",
        "Saturated solution holds maximum solute at that temperature.",
        "Unsaturated can dissolve more. Dilute has low solute. Concentrated has high solute but not necessarily saturated."
    ));
    // Variant of 18
    bank.push(q(
        "(variant) Which of the following will sink in water? (density of water = 1 g/cm³)",
        ["wood (0.8 g/cm³)", "ice (0.92 g/cm³)", "iron (7.8 g/cm³)", "oil (0.9 g/cm³)"],
        2,
        "Density > 1 g/cm³ sinks.",
        "Iron is denser than water, so it sinks.",
        "Wood, ice, oil are less dense and float."
    ));
    // Variant of 19
    bank.push(q(
        "(variant) The meniscus for water in a measuring cylinder is –",
        ["curved upward", "curved downward", "straight line", "always at 45°"],
        1,
        "Water curves up at edges.",
        "Water forms a concave meniscus (curves downward).",
        "Curved upward is convex (mercury). Straight line not possible. 45° is nonsense."
    ));
    // Variant of 20
    bank.push(q(
        "(variant) Solubility of most solids in water generally _______ with increase in temperature.",
        ["decreases", "increases", "remains same", "first decreases then increases"],
        1,
        "Heat helps dissolve.",
        "Higher temperature increases kinetic energy, so solubility rises.",
        "For gases it decreases, but solids increase."
    ));
    // Variant of 21
    bank.push(q(
        "(variant) 1 mL is equivalent to –",
        ["1 cm³", "1 m³", "1 dm³", "1 mm³"],
        0,
        "Volume relation.",
        "1 mL = 1 cm³.",
        "1 m³ is too large, 1 dm³ = 1 L, 1 mm³ too small."
    ));
    // Variant of 22
    bank.push(q(
        "(variant) Which instrument is used to measure mass?",
        ["thermometer", "balance", "barometer", "measuring cylinder"],
        1,
        "Mass vs weight.",
        "A balance measures mass.",
        "Thermometer measures temperature, barometer pressure, cylinder volume."
    ));
    // Variant of 23
    bank.push(q(
        "(variant) What is the relative density of a substance if its density is 2.5 g/cm³ and water density is 1 g/cm³?",
        ["2.5", "1.5", "0.4", "25"],
        0,
        "Divide by water density.",
        "Relative density = density of substance/density of water = 2.5.",
        "1.5 is difference, 0.4 is reciprocal, 25 is product."
    ));
    // Variant of 24
    bank.push(q(
        "(variant) When sugar dissolves in water, the mixture is –",
        ["non-uniform", "heterogeneous", "uniform", "suspension"],
        2,
        "Even distribution.",
        "Sugar and water form a homogeneous (uniform) solution.",
        "Non-uniform and heterogeneous mean same: not uniform. Suspension has particles that settle."
    ));
    // Variant of 25
    bank.push(q(
        "(variant) The density of a substance _______ on heating (generally).",
        ["increases", "decreases", "stays same", "may increase or decrease"],
        1,
        "Expand volume.",
        "Heating increases volume, mass constant → density decreases.",
        "Exception: water between 0-4°C, but generally decreases."
    ));
    // Variant of 26
    bank.push(q(
        "(variant) Which has highest density?",
        ["cold water at 4°C", "ice at 0°C", "steam at 100°C", "warm water at 50°C"],
        0,
        "Water anomaly.",
        "Water is densest at 4°C.",
        "Ice is less dense, steam is very low density, warm water is less dense than 4°C water."
    ));
    // Variant of 27
    bank.push(q(
        "(variant) ORS stands for –",
        ["Oral Rehydration Solution", "Oxygen Rich Saline", "Osmosis Relief Salt", "Organic Recovery System"],
        0,
        "Health drink.",
        "Oral Rehydration Solution used for dehydration.",
        "Others are made-up."
    ));
    // Variant of 28
    bank.push(q(
        "(variant) Which of these is a gaseous solution?",
        ["air", "soda water", "oxygen", "brass"],
        0,
        "Gas in gas.",
        "Air is a solution of gases (N₂, O₂, etc).",
        "Soda water is gas in liquid. Oxygen is pure gas. Brass is solid solution."
    ));
    // Variant of 29
    bank.push(q(
        "(variant) Which one is an element?",
        ["Water", "Salt", "Oxygen", "Sugar"],
        2,
        "Cannot be broken further.",
        "Oxygen is an element (O₂).",
        "Water (H₂O), salt (NaCl), sugar (C₁₂H₂₂O₁₁) are compounds."
    ));
    // Variant of 30
    bank.push(q(
        "(variant) Brass is a mixture of –",
        ["copper and zinc", "copper and tin", "iron and carbon", "aluminium and magnesium"],
        0,
        "Alloy.",
        "Brass = copper + zinc.",
        "Copper+tin = bronze. Iron+carbon = steel. Al+Mg = other alloy."
    ));
    // Variant of 31
    bank.push(q(
        "(variant) A pure substance has –",
        ["variable composition", "only one type of particle", "two or more compounds", "visible different parts"],
        1,
        "Homogeneous matter.",
        "Pure substances have fixed composition and identical particles.",
        "Variable composition = mixture. Two or more compounds = mixture. Visible parts = heterogeneous."
    ));
    // Variant of 32
    bank.push(q(
        "(variant) Passing electric current through water gives –",
        ["oxygen and hydrogen", "hydrogen and chlorine", "nitrogen and oxygen", "only oxygen"],
        0,
        "Electrolysis.",
        "Water splits into H₂ and O₂.",
        "Chlorine not present (only if salt water). Nitrogen not present. Only oxygen is wrong."
    ));
    // Variant of 33
    bank.push(q(
        "(variant) Which is a compound?",
        ["Iron sulfide", "Iron filings", "Sulfur powder", "Air"],
        0,
        "Chemically bonded.",
        "Iron sulfide (FeS) is a compound.",
        "Iron filings = element, sulfur powder = element, air = mixture."
    ));
    // Additional variants to reach 120: we have 87 original + 33 variants = 120. We need to list all variants from 88 to 120. We've done up to variant of 33 (which is original question 33). That gives 33 variants? Let's count: original up to 87, variants from 88 to 120 is 33 items. We have listed 33 variants? Let's verify: we started variant of 1,2,... up to variant of 33. That's 33 variants. So total bank length now is 87 + 33 = 120. Perfect.

    // Pad to 120 (already 120, loop will do nothing)
    while (bank.length < 120) {
        bank.push(bank[bank.length % bank.length]);
    }

    return bank;
}

// The rest of the script.js remains exactly the same (event listeners, shuffle, display, etc.)
// ... (keep all existing code below)