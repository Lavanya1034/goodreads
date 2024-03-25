import Category from "./Category";

function CategoryList() {
  const items = [
    {
      catId: 1,
      catName: "Fiction",
      catImage: "https://via.placeholder.com/600?bg_color=808080",
    },
    {
      catId: 2,
      catName: "History",
      catImage: "https://via.placeholder.com/600?bg_color=808080",
    },
    {
      catId: 3,
      catName: "Science",
      catImage: "https://via.placeholder.com/600?bg_color=808080",
    },
    {
      catId: 4,
      catName: "External Affairs",
      catImage: "https://via.placeholder.com/600?bg_color=808080",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-center">All Categories</h1>
      <div className="row md-20">
        {items.map((category, index) => (
          <Category key={index} data={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
