import React, { useState } from "react";

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 2, 3, 4];
export const HomePage = () => {
  const test = [...arr1, ...arr2];
  const first = test.sort(() => 0.5 - Math.random());
  const [grid, setGrid] = useState(first);
  const initialValue = new Array(grid.length).fill(false);
  const [revealedGrid, setRevealedGrid] = useState(initialValue);
  const [previousClickIndex, setPreviousClick] = useState<number | undefined>();

  const handle = (currentIndex: number) => {
    const currentClickedNumber = grid[currentIndex];
    const newRevealedGrid = [...revealedGrid];
    newRevealedGrid[currentIndex] = true;
    setRevealedGrid(newRevealedGrid);

    if (previousClickIndex !== undefined) {
      const previousClickedNumber = grid[previousClickIndex];

      if (currentClickedNumber !== previousClickedNumber) {
        setTimeout(() => {
          newRevealedGrid[currentIndex] = false;
          newRevealedGrid[previousClickIndex] = false;
          setRevealedGrid([...newRevealedGrid]);
        }, 1000);
      } else {
        const hasWon = newRevealedGrid.every((isTrue) => isTrue);

        if (hasWon) {
          setTimeout(() => {
            setRevealedGrid(initialValue);
            setGrid(first);
          }, 1000);
        }
      }
      setPreviousClick(undefined);
    } else {
      setPreviousClick(currentIndex);
    }
  };

  const numbers = (arr) => {
    let arrLength = arr.length - 1
    do {
      if(arr[arrLength] % 2 !== 0){
        arr.splice(arrLength,1)
      }
      arrLength--
    } while(arrLength >= 0)
    console.log(arr)
  };
  console.log(numbers)
  return (
    <>
      <div className="grid">
        {grid.map((number, index) => (
          <div
            key={index}
            className={`card ${revealedGrid[index] ? "active" : ""}`}
            onClick={() => handle(index)}
          >
            {revealedGrid[index] && number}
          </div>
        ))}
      </div>
    </>
  );
};

// interface Props {
//   name: string;
//   id: string;
//   completed: boolean;
// }
// export const HomePage: React.FC = () => {
//   const [currentActiveButton, setActiveButton] = useState("1");

//   const [response, setData] = useState<Props[]>([]);
//   useEffect(() => {
//     setData([
//       { name: "first", id: "1", completed: false },
//       { name: "second", id: "2", completed: false },
//       { name: "third", id: "3", completed: false },
//       { name: "fourth", id: "4", completed: false },
//     ]);
//   }, []);
//   const data = response.map((x) => {
//     return {
//       ...x,
//       initialProp: "initialProp",
//     };
//   });
//   console.log(data);

//   return data.length > 0 ? (
//     <>
//       <h1>Home page</h1>
//       <div>
//         {data.map((x, i) => (
//           <div key={i}>
//             <Test
//               id={x.id}
//               name={x.name}
//               isActive={x.id === currentActiveButton}
//               onClick={(e) => {
//                 setActiveButton(e.currentTarget.id);
//               }}
//               completed={x.completed}
//             />
//           </div>
//         ))}
//       </div>
//       <button
//         disabled={data[data.length - 1].id === currentActiveButton}
//         onClick={() => {
//           setActiveButton(data[parseInt(currentActiveButton)].id);
//           setData(
//             data.map((x) => {
//               if (x.id === currentActiveButton) {
//                 return {
//                   ...x,
//                   completed: true,
//                 };
//               } else {
//                 return x;
//               }
//             })
//           );
//         }}
//       >
//         Next
//       </button>
//     </>
//   ) : null;
// };
// export const SomeTest = () => (
//   <Box margin="0 auto" p="0" role="status" aria-label="Email digest">
//     <Wrapper padding="lg" display="flex" alignItems="center">
//       <Wrapper width="100%" marginRight="50px">
//         <Skeleton count={2} lineHeight="2" />
//       </Wrapper>
//       <Wrapper display="flex" alignItems="center">
//         <Skeleton width="60px" height="30px" marginRight="10px" />
//         <Skeleton width="50px" height="20px" />
//       </Wrapper>
//     </Wrapper>
//   </Box>
// );
