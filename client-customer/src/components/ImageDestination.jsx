export default function ImageDestination({ image }) {
    console.log(image);
    return (
      <img
        alt=""
        className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
        src={image}/>
    );
  }
  