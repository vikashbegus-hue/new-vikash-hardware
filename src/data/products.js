const commonsOilImage = filename => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=900`;

export const categories = [
  { id: 'tractor', title: 'Tractor Parts', description: 'Parts for farm tractors and working machinery.', image: 'https://images.unsplash.com/photo-1533062618053-d51e617307ec?auto=format&fit=crop&w=900&q=85', imagePosition: 'center 55%', alt: 'Green agricultural tractor working in a field' },
  { id: 'jeep', title: 'Jeep Parts', description: 'Find the right parts for your jeep and 4×4.', image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85', alt: 'Rugged four wheel drive vehicle' },
  { id: 'pickup', title: 'Pickup Parts', description: 'Practical parts for pickups and utility vehicles.', image: 'https://www.toyota.co.nz/globalassets/about-toyota/news/2017/december/hilux-offers-more-choice-and-features-to-meet-market-demand_hero_940x450.jpg', imagePosition: 'center center', alt: 'Toyota Hilux pickup truck shown from the front and side with its full body and wheels visible' },
  { id: 'hardware', title: 'Hardware & Motor Parts', description: 'Bearings, fittings and more for motor machinery.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85', alt: 'Mechanical parts and workshop tools' },
  { id: 'oils', title: 'Oils & Lubricants', description: 'Shell R1, R3, R4 engine oils and other lubricants for tractors, jeeps and pickups.', image: '/images/shell-rimula-lineup.svg', imagePosition: 'center 48%', alt: 'Shell Rimula R1, R3 and R4 engine oil containers shown together' },
];

const commonsFile = filename => `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}?width=900`;
const commonsPage = filename => `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename.replace(/ /g, '_'))}`;
const part = (id, name, category, vehicle, description, imageFile, imagePosition = 'center', imageOverride, creditOverride) => ({
  id, name, category, vehicle, label: category, description, imageFile, imagePosition,
  image: imageOverride || commonsFile(imageFile), imageFallback: commonsFile('Gaskets.jpg'), imageCredit: creditOverride || commonsPage(imageFile), alt: `${name} spare part photograph`
});

export const productCategories = [
  { id: 'engine', title: 'Engine Parts' }, { id: 'filters', title: 'Filters' },
  { id: 'clutch', title: 'Clutch & Gearbox' }, { id: 'steering', title: 'Steering' },
  { id: 'brakes', title: 'Brake Parts' }, { id: 'electrical', title: 'Electrical Parts' },
  { id: 'lubricants', title: 'Oils & Lubricants' },
  { id: 'body', title: 'Body Parts' }, { id: 'hardware', title: 'Hardware' }
];

const oilProduct = (id, name, description, imageFile, imagePosition = 'center', imageOverride) => ({
  ...part(id, name, 'lubricants', 'oils', description, imageFile, imagePosition, imageOverride, 'https://www.shell.in/fuels-oils-and-coolants/rimula-truck-heavy-duty-engine-oil.html'),
  imageFallback: commonsOilImage('2oilcontainers no brand.jpg'),
  alt: `${name} lubricant container photograph`
});

export const products = [
  oilProduct('shell-rimula-r1','Shell Rimula R1','Shell Rimula R1 engine oil. Ask us to confirm the right grade for your vehicle or equipment.','Shell Rimula R1 Multi pail', 'center', 'https://www.shell.in/fuels-oils-and-coolants/rimula-truck-heavy-duty-engine-oil/_jcr_content/root/main/filtered/filtered_copy_copy_c_1432473517.shellimg.jpeg/1737989906130/rimula-r1-multi-20w-40-pail.jpeg'),
  oilProduct('shell-rimula-r3','Shell Rimula R3','Shell Rimula R3 engine oil. Ask us to confirm the right grade for your vehicle or equipment.','Shell Rimula R3 X', 'center', 'https://www.shell.in/fuels-oils-and-coolants/rimula-truck-heavy-duty-engine-oil/_jcr_content/root/main/filtered/filtered_copy_copy_c_1432473517.shellimg.jpeg/1737989906130/rimula-r3x-15w-40-pail.jpeg'),
  oilProduct('shell-rimula-r4','Shell Rimula R4','Shell Rimula R4 engine oil. Ask us to confirm the right grade for your vehicle or equipment.','Shell Rimula R4', 'center', 'https://www.shell.in/fuels-oils-and-coolants/rimula-truck-heavy-duty-engine-oil/_jcr_content/root/main/filtered/filtered_copy_copy_c_2101821020.shellimg.jpeg/1737990380001/rimula-r4-15w-40-pail.jpeg'),
  part('engine-oil-filter','Engine Oil Filter','filters','tractor','Filters engine oil to help protect moving components.','Oil filter.JPG','center 48%'),
  part('air-filter','Air Filter','filters','jeep','Filters intake air for the engine.','Air filter for Toyota 1KR-FE.jpg'),
  part('fuel-filter','Fuel Filter','filters','pickup','Filters contaminants from the fuel system.','Dieselfilter PKW VAG.jpg'),
  part('engine-piston','Engine Piston','engine','tractor','Engine piston for replacement and fitment enquiries.','Cummins Diesel engine piston head 45deg.jpg'),
  part('engine-gasket','Engine Gasket','engine','jeep','Gasket component for engine repair enquiries.','Gaskets.jpg'),
  part('radiator','Radiator','engine','pickup','Cooling system radiator for vehicle fitment enquiries.','Automobile radiator.jpg'),
  part('fan-belt','Fan Belt','engine','tractor','Engine fan belt for replacement enquiries.','The simple belt drive- power from a motorcycle engine (14265866720).jpg'),
  part('clutch-plate','Clutch Plate','clutch','jeep','Clutch plate for manual transmission applications.','Clutch disc.JPG'),
  part('clutch-bearing','Clutch Bearing','clutch','pickup','Clutch release bearing for fitment enquiries.','Clutch release (553673879).jpg'),
  part('pressure-plate','Pressure Plate','clutch','tractor','Clutch pressure plate for vehicle-specific enquiries.','Cutch cover.JPG'),
  part('gear-lever','Gear Lever','clutch','jeep','Gear lever assembly for replacement enquiries.','A close-up of a manual gear shift.jpg'),
  part('steering-wheel','Steering Wheel','steering','pickup','Steering wheel options for vehicle-specific enquiries.','Steering wheel 001.jpg'),
  part('steering-assembly','Steering Assembly','steering','tractor','Steering assembly parts for fitment enquiries.','Car with clearly visible steering rack with inner track rod and track rod ends.jpg'),
  part('tie-rod-end','Tie Rod End','steering','jeep','Tie rod end for steering linkage replacement.','Tie rod end.jpeg'),
  part('brake-pedal','Brake Pedal','brakes','tractor','Brake pedal component for fitment enquiries.','Pedal.jpg'),
  part('brake-shoe','Brake Shoe','brakes','jeep','Brake shoe options for vehicle-specific enquiries.','Brake shoe.jpg'),
  part('brake-disc','Brake Disc','brakes','pickup','Brake disc for replacement enquiries.','Disc brakes.jpg'),
  part('brake-master-cylinder','Brake Master Cylinder','brakes','jeep','Brake master cylinder for fitment enquiries.','Brake master cylinder and reservoir.JPG'),
  part('hand-brake-parts','Hand Brake Parts','brakes','pickup','Hand brake components for replacement enquiries.','Handbremshebel.jpg'),
  part('tractor-ladder','Tractor Ladder / Footstep','body','tractor','Tractor access ladder and footstep options.','Massey Ferguson tractor footplate','center','https://masseytractorparts.com/cdn/shop/files/Footplate_RH_S_42673_Sparex_Massey_Tractor_Parts_42673_pic1_2.jpg?v=1732186717&width=533','https://masseytractorparts.com/collections/cab-steps'),
  part('pickup-side-step','Pickup Side Step','body','pickup','Side step options for pickup utility vehicles.','Chevrolet pickup running board','center','https://ecommerce-assets.ext.gm.com/assets/products/images/86574738_Alternate1.jpg','https://accessories.chevrolet.com/product/silverado-and-sierra-crew-cab-6-inch-rectangular-running-boards-in-chrome-86574738'),
  part('headlight','Headlight','electrical','jeep','Headlight assembly options for fitment enquiries.','Heady-light.jpg'),
  part('tail-light','Tail Light','electrical','pickup','Tail light assembly for replacement enquiries.','car right side tail lamp.jpg'),
  part('side-mirror','Side Mirror','body','jeep','Side mirror options for vehicle-specific enquiries.','Car-SideMirror.jpg'),
  part('mudguard','Mudguard','body','tractor','Mudguard options for tractors and utility vehicles.','AGCO tractor mudguard','center','https://masseytractorparts.com/cdn/shop/files/cq5dam.web.1280.1280_4fbcac49-464f-4b7f-8dd1-be06cddc4e1d.jpg?v=1732183393&width=533','https://masseytractorparts.com/collections/mudguard-fenders'),
  part('bumper','Bumper','body','pickup','Bumper options for vehicle-specific enquiries.','AutoBumper.jpg'),
  part('starter-motor','Starter Motor','electrical','tractor','Starter motor options for engine fitment enquiries.','Automobile starter.JPG'),
  part('alternator','Alternator','electrical','jeep','Alternator options for vehicle electrical systems.','Automotive alternator.jpg'),
  part('battery','Battery','electrical','pickup','Battery options for vehicle-specific enquiries.','Batterie TUNDRA EFB.jpg'),
  part('wiring-harness','Wiring Harness','electrical','tractor','Wiring harness options for fitment enquiries.','Wire harness.JPG'),
  part('bearings','Bearings','hardware','hardware','Workshop and vehicle bearing options.','Ballbearing.JPG'),
  part('nuts-and-bolts','Nuts and Bolts','hardware','hardware','Fasteners for workshop, vehicle and machinery use.','Nuts and bolts.jpg'),
  oilProduct('tractor-engine-oil','Tractor Engine Oil','Engine oil options for tractor applications. Check the operator manual for the recommended grade and specification.','2oilcontainers no brand.jpg'),
  oilProduct('car-jeep-engine-oil','Car and Jeep Engine Oil','Engine oil options for car and jeep applications. Confirm the manufacturer-recommended grade and specification.','Kendall motor oil can.JPG'),
  oilProduct('pickup-engine-oil','Pickup Truck Engine Oil','Engine oil options for pickup trucks. Verify the correct grade and specification for your vehicle.','Petro-canada oil bottle products 7355.jpg'),
  oilProduct('diesel-engine-oil','Diesel Engine Oil','Diesel engine oil choices for compatible vehicles and equipment. Check the manufacturer requirements before use.','Petro motor oil.jpg'),
  oilProduct('petrol-engine-oil','Petrol Engine Oil','Petrol engine oil options. Match the grade and specification in your vehicle manual.','Amalie Motor Oil (18681890589).jpg'),
  oilProduct('heavy-duty-engine-oil','Heavy-Duty Engine Oil','Heavy-duty engine oil options for compatible engines. Confirm application and required specification before purchase.','Моторное масло М-8В SAE-20W20.jpg'),
  oilProduct('brake-fluid','Brake Fluid DOT 3 / DOT 4','Brake fluid options; DOT 3 or DOT 4 only where permitted by the vehicle manufacturer. Never mix specifications without checking the manual.','Olio lubrificante.png'),
  oilProduct('tractor-hydraulic-oil','Tractor Hydraulic Oil','Hydraulic oil options for tractor systems. Confirm the required fluid type and specification for your tractor.','Lubricating oil tank.jpg'),
  oilProduct('hydraulic-system-oil','Hydraulic System Oil','Hydraulic system fluid options. Check equipment documentation for the recommended fluid specification.','Oil cans steamship.jpg'),
  oilProduct('power-steering-fluid','Power Steering Fluid','Power steering fluid where applicable. Use only the fluid type specified by the vehicle manufacturer.','Oli Mesin Sepeda Motor Mesran Pertamina.jpg'),
  oilProduct('gear-oil','Gear Oil','Gear oil options for compatible gearboxes and driveline components. Verify the specified grade before use.','Трансмиссионное масло ТМ 5-18.JPG'),
  oilProduct('manual-transmission-oil','Manual Transmission Oil','Manual transmission lubricant options. Confirm the required specification in your vehicle manual.','Шприцы Жане и трансмиссионное масло ТАД-17.JPG'),
  oilProduct('automatic-transmission-fluid','Automatic Transmission Fluid (ATF)','ATF options for compatible automatic transmissions. Exact specification varies; check the manufacturer recommendation.','Car Oil Change (17218054110).jpg'),
  oilProduct('tractor-transmission-oil','Tractor Transmission Oil','Transmission oil options for tractors. Confirm the required fluid type for the transmission and hydraulic system.','Olio Motore.jpg'),
  oilProduct('differential-oil','Differential Oil','Differential lubricant options. Check the axle manufacturer specification and required grade.','Замена трансмиссионного масла в заднем мосту.JPG'),
  oilProduct('final-drive-oil','Final Drive Oil','Final drive lubricant options for compatible machinery. Confirm the equipment manual requirements.','Моторное масло М-8В.jpg'),
  oilProduct('engine-coolant','Engine Coolant / Antifreeze','Coolant options for vehicle cooling systems. Check the required coolant type and compatibility before topping up.','Car maintenance occurs with an oil container placed beside a tire in a workshop.jpg'),
  oilProduct('grease','Grease','Grease options for suitable automotive and machinery lubrication points. Verify the required type for the application.','Siringaperolio 016.jpg'),
  oilProduct('chassis-lubricant','Chassis Lubricant','Chassis lubrication products for compatible service points. Confirm lubrication requirements for your vehicle.','Recipienti in acciaio per l\'olio.jpg'),
  oilProduct('multipurpose-lubricating-oil','Multipurpose Lubricating Oil','General-purpose lubricant options for appropriate equipment and service tasks. Check compatibility before use.','Olio lubrificante.png'),
  oilProduct('differential-axle-lubricant','Differential and Axle Lubricants','Axle and differential lubricant options. Match the recommended specification for your vehicle or machinery.','Oil Change oil pan 2005 gmc suv.JPG')
];
