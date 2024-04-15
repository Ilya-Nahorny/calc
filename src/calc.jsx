

const data = {
  "materials": [
    {
      "name": "Laminat",
      "category": "Standardowa",
      "price": 20,
      "rooms": ["Salon", "Sypialnia", "Kuchnia"],
      "surfaces": ["Podłoga"]
    },
    {
      "name": "Parkiet",
      "category": "Premium",
      "price": 40,
      "rooms": ["Salon", "Sypialnia", "Kuchnia"],
      "surfaces": ["Podłoga"]
    },
    {
      "name": "Tapeta",
      "category": "Podstawowa",
      "price": 15,
      "rooms": ["Salon", "Sypialnia", "Łazienka", "Kuchnia"],
      "surfaces": ["Ściany"]
    },
    {
      "name": "Farba",
      "category": "Podstawowa",
      "price": 10,
      "rooms": ["Salon", "Sypialnia", "Łazienka", "Kuchnia"],
      "surfaces": ["Ściany"]
    },
    {
      "name": "Płytki ceramiczne",
      "category": "Premium",
      "price": 50,
      "rooms": ["Łazienka", "Kuchnia"],
      "surfaces": ["Podłoga", "Ściany"]
    },
    {
      "name": "Kafelki",
      "category": "Standardowa",
      "price": 30,
      "rooms": ["Łazienka"],
      "surfaces": ["Podłoga", "Ściany"]
    },
    {
      "name": "Gładź gipsowa",
      "category": "Podstawowa",
      "price": 20,
      "rooms": ["Salon", "Sypialnia", "Kuchnia"],
      "surfaces": ["Sufit"]
    },
    {
      "name": "Tynk strukturalny",
      "category": "Premium",
      "price": 35,
      "rooms": ["Salon", "Sypialnia"],
      "surfaces": ["Ściany"]
    },
    {
      "name": "Panele PCV",
      "category": "Standardowa",
      "price": 25,
      "rooms": ["Łazienka", "Kuchnia"],
      "surfaces": ["Podłoga"]
    },
    {
      "name": "Wykładzina dywanowa",
      "category": "Podstawowa",
      "price": 18,
      "rooms": ["Salon", "Sypialnia"],
      "surfaces": ["Podłoga"]
    },
    {
      "name": "Fototapeta",
      "category": "Premium",
      "price": 60,
      "rooms": ["Salon", "Sypialnia"],
      "surfaces": ["Ściany"]
    },
    {
      "name": "Dekoracyjne listwy przypodłogowe",
      "category": "Premium",
      "price": 45,
      "rooms": ["Salon", "Sypialnia", "Łazienka", "Kuchnia"],
      "surfaces": ["Podłoga"]
    },
    {
      "name": "Farba magnetyczna",
      "category": "Premium",
      "price": 30,
      "rooms": ["Salon", "Sypialnia", "Łazienka", "Kuchnia"],
      "surfaces": ["Ściany"]
    },
    {
      "name": "Deska elewacyjna",
      "category": "Standardowa",
      "price": 35,
      "rooms": ["Zewnętrzna"],
      "surfaces": ["Elewacja"]
    },
    {
      "name": "Deski podłogowe drewniane",
      "category": "Premium",
      "price": 55,
      "rooms": ["Salon", "Sypialnia"],
      "surfaces": ["Podłoga"]
    },
    {
      "name": "Dywaniki dywanowe",
      "category": "Standardowa",
      "price": 22,
      "rooms": ["Biuro", "Dziecięcy"],
      "surfaces": ["Podłoga"]
    },
    {
      "name": "Ściany z płyt gipsowo-kartonowych",
      "category": "Podstawowa",
      "price": 12,
      "rooms": ["Biuro", "Salon"],
      "surfaces": ["Ściana"]
    },
    {
      "name": "Gres szkliwiony",
      "category": "Premium",
      "price": 65,
      "rooms": ["Kuchnia", "Łazienka"],
      "surfaces": ["Podłoga", "Ściana"]
    },
    {
      "name": "Linoleum",
      "category": "Standardowa",
      "price": 28,
      "rooms": ["Kuchnia", "Przedpokój"],
      "surfaces": ["Podłoga"]
    },
    {
      "name": "Panele MDF",
      "category": "Premium",
      "price": 70,
      "rooms": ["Salon"],
      "surfaces": ["Podłoga", "Ściana"]
    }
    
    
  ],
  "categories": ["Podstawowa", "Standardowa", "Premium"],
  "rooms": ["Salon", "Sypialnia", "Łazienka", "Kuchnia"],
  "surfaces": ["Podłoga", "Ściany", "Sufit"]
};
const Calculator = () => {
  const [priceCategory, setPriceCategory] = React.useState('');
  const [selectedRooms, setSelectedRooms] = React.useState([]);
  const [roomMaterials, setRoomMaterials] = React.useState({});
  const [addRoom, setAddRoom] = React.useState(false);
  const [addArea, setAddArea] = React.useState(false);
  const [addMaterials, setAddMaterials] = React.useState(false);
  const [filteredMaterials, setFilteredMaterials] = React.useState([]);
  const [square, setSquare] = React.useState([0,0,0]);

  const [totalCost, setTotalCost] = React.useState(0);
  const selectedRoomsObj = {};
  let cost = 0; 

  // Функция для фильтрации материалов
  const filterMaterials = (roomType) => {
    const materialsList = data.materials
      .filter(material => material.category === priceCategory)
      .filter(material => material.rooms.includes(roomType));
      
    setFilteredMaterials( ...filteredMaterials, materialsList);
    // console.log(filteredMaterials);
  }

  const areaCalc = (value) => {
    let podlogaArea = parseFloat(value);
    let scianyArea = value * 4;
    let sufitArea = value;

    setSquare([podlogaArea, scianyArea, sufitArea]);
  }

  React.useEffect(() => {
    console.log(filteredMaterials);
  }, [filteredMaterials]);

  const handleFloorAreaChange = (room, value) => {
    const updatedRoomMaterials = { ...roomMaterials };
    updatedRoomMaterials[room].floor = parseFloat(value);
    updatedRoomMaterials[room].ceiling = parseFloat(value); // Assigning same area to ceiling
    updatedRoomMaterials[room].walls = parseFloat(value) * 4; // Assigning floor area multiplied by 4 to walls
    setRoomMaterials(updatedRoomMaterials);
  };
  return (
    <div>
      <h1>Калькулятор ремонта</h1>
        {!priceCategory && (
            <div className="categorySelect" categories={data.categories}>
              <ul>
                {data.categories.map((category, index) => (
                  <li key={index}>
                    <button onClick={(e)=>{
                      setPriceCategory(e.target.innerText);
                    }}>
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
        )}
        {priceCategory && !addRoom && !addArea && !addMaterials && (
          <div className="roomSelect" rooms={data.rooms}>
            {!addRoom && (
            <button
            onClick = {(e)=>{
              setAddRoom(true);
            }}>Add room</button>
            )}
          </div>
        )}
        {addRoom && !addArea && (
          data.rooms.map((room, index) => (
            <li key={index}>
              <button onClick={(e)=>{
                const roomType = e.target.innerText;
                  const materialsList = data.materials
                  .filter(material => material.category === priceCategory)
                  .filter(material => material.rooms.includes(roomType));
                  
                  // Создаем новый объект
                  const roomName = { [roomType]: materialsList };
                  
                  // Добавляем новый объект в filteredMaterials
                  setFilteredMaterials([...filteredMaterials, roomName]);

                  setAddRoom(false);
                  // filterMaterials(e.target.innerText);
                  setAddMaterials(true);
                  // selectedRoomsObj[room] = {};                
                }}>
                {room}
              </button>
            </li>
          ))
        )}

        { addMaterials && (
          <div>
            <h5>Выберите материалы для Пола</h5>
            <ul>

              {filteredMaterials.filter(material => material.surfaces.includes("Podłoga")).map((material, index) => (
                <li key={index}>
                  <button onClick={(e)=>{
                    const clickedMaterial = e.target.innerText; // Получаем значение выбранного материала
                    const selectedMaterial = filteredMaterials.filter(material => material.name === clickedMaterial); // Фильтруем материалы
                    setFilteredMaterials(selectedMaterial); // Обновляем состояние
                  }}>
                    {material.name}
                  </button>
                </li>
              ))}
            </ul>
            <h5>Выберите материалы для Стен</h5>
            <ul>
              {filteredMaterials.filter(material => material.surfaces.includes("Ściany")).map((material, index) => (
                <li key={index}>
                  <button onClick={(e)=>{
                    const wallOptions = filteredMaterials.filter(material => material.surfaces.includes("Ściany"));
                    setFilteredMaterials(wallOptions);
                  }}>
                    {material.name}
                  </button>
                </li>
              ))}
            </ul>
            <h5>Выберите материалы для Потолка</h5>
            <ul>
              {filteredMaterials.filter(material => material.surfaces.includes("Sufit")).map((material, index) => (
                <li key={index}>
                  <button onClick={(e)=>{
                    const ceilingOptions = filteredMaterials.filter(material => material.surfaces.includes("Sufit"));
                    setFilteredMaterials(ceilingOptions);
                  }}>
                    {material.name}
                  </button>
                </li>
              ))}
            </ul>
            <button onClick={(e)=>{
              setAddMaterials(false);
              setAddArea(true);
            }}>Potwierdz</button>
          </div>
        )}
        {/* { addArea && !addMaterials && (
          <div>
            <label>Podaj powierzchnię :</label>
            <input type="number" placeholder="Powierzchnia" onChange={(e)=>{areaCalc(e.target.value);}}/>
            <button onClick={(e)=>{setAddArea(false); }}>Submit</button>
            <div>
            <h4>podłoga: { square[0]  }</h4>

            <h4>sciany: { square[1] } </h4>

            <h4>sufit: { square[2] } </h4>  

          </div>
          </div>
        )} */}

      <div>
        <h2>Общая стоимость: 0 PLN</h2>
      </div>
    </div>
  );

}

export default Calculator;




// const Calculator = () => {
//   const [priceCategory, setPriceCategory] = React.useState('');
//   const [selectedRooms, setSelectedRooms] = React.useState([]);
//   const [roomMaterials, setRoomMaterials] = React.useState({});
//   const [totalCost, setTotalCost] = React.useState(0);

//   const handlePriceCategorySelect = (category) => {
//     setPriceCategory(category);
//     setSelectedRooms([]);
//     setRoomMaterials({});
//     setTotalCost(0);
//   };

//   const handleRoomSelect = (room) => {
//     setSelectedRooms([...selectedRooms, room]);
//     setRoomMaterials({ ...roomMaterials, [room]: { floor: 0, ceiling: 0, walls: 0 } });
//   };

//   const handleMaterialSelect = (room, surface, material) => {
//     const updatedRoomMaterials = { ...roomMaterials };
//     updatedRoomMaterials[room][surface] = material;
//     setRoomMaterials(updatedRoomMaterials);
//   };

//   const handleFloorAreaChange = (room, value) => {

//     const updatedRoomMaterials = { ...roomMaterials };
//     updatedRoomMaterials[room].floor = parseFloat(value);
//     updatedRoomMaterials[room].ceiling = parseFloat(value); // Assigning same area to ceiling
//     updatedRoomMaterials[room].walls = parseFloat(value) * 4; // Assigning floor area multiplied by 4 to walls
//     setRoomMaterials(updatedRoomMaterials);

//   };

//   React.useEffect(() => {
//     let total = 0;
//     selectedRooms.forEach(room => {
//       const roomMaterial = roomMaterials[room];
//       Object.keys(roomMaterial).forEach(surface => {
//         // console.log(roomMaterial);
//         const material = roomMaterial[surface];
//         if (material) {
//           const materialPrice = material.price;
//           const surfaceArea = roomMaterial[surface];
//           total += materialPrice * surfaceArea;
//         }
//       });
//     });
//     setTotalCost(total);
//   }, [roomMaterials, selectedRooms]);

//   return (
//     <div>
//       <h1>Калькулятор ремонта</h1>
//       {!priceCategory && (
//         <PriceCategorySelector
//           categories={data.categories}
//           onSelect={handlePriceCategorySelect}
//         />
//       )}
//       {priceCategory && selectedRooms.length < data.rooms.length && (
//         <RoomSelector
//           rooms={data.rooms}
//           onSelect={handleRoomSelect}
//         />
//       )}
//       {selectedRooms.map(room => (
//         <RoomInputForm
//           key={room}
//           room={room}
//           surfaces={data.surfaces}
//           materials={data.materials.filter(material => material.rooms.includes(room) && material.category === priceCategory)}
//           onSelectMaterial={handleMaterialSelect}
//           onFloorAreaChange={(value) => handleFloorAreaChange(room, value)}
//         />
//       ))}
//       <div>
//         <h2>Общая стоимость: {totalCost} PLN</h2>
//       </div>
//     </div>
//   );
// };


// const PriceCategorySelector = ({ categories, onSelect }) => (
//   <div>
//     <h2>Выберите ценовую категорию:</h2>
//     <ul>
//       {categories.map(category => (
//         <li key={category}>
//           <button onClick={() => onSelect(category)}>{category}</button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const RoomSelector = ({ rooms, onSelect }) => (
//   <div>
//     <h2>Выберите комнату:</h2>
//     <ul>
//       {rooms.map(room => (
//         <li key={room}>
//           <button onClick={() => onSelect(room)}>{room}</button>
//         </li>
//       ))}
//     </ul>
//   </div>
// );

// const RoomInputForm = ({ room, surfaces, materials, onSelectMaterial }) => {
//   const [floorArea, setFloorArea] = React.useState(0);

//   const handleMaterialSelect = (surface, material) => {
//     onSelectMaterial(room, surface, material);
//   };

//   return (
//     <div>
//       <h2>{room}</h2>
//       <label>Площадь пола (м²):</label>
//       <input
//         type="number"
//         value={floorArea}
//         onChange={(e) => setFloorArea(e.target.value)}
//       />
//       {surfaces.map(surface => (
//         <div key={surface}>
//           <h3>{surface}</h3>
//           <MaterialSelector
//             materials={materials.filter(material => material.surfaces.includes(surface))}
//             onSelect={(material) => handleMaterialSelect(surface, material)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };

// const MaterialSelector = ({ materials, onSelect }) => (
//   <ul>
//     {materials.map(material => (
//       <li key={material.name}>
//         <button onClick={() => onSelect(material)}>{material.name}</button>
//       </li>
//     ))}
//   </ul>
// );

// export default Calculator;
