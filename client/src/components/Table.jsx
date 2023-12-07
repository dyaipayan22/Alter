const heading = ['name', 'brand', 'price', 'stock'];
const data = [
  { name: 'Hello', brand: 'Monte Carlo', price: 200, stock: 5 },
  { name: 'Hello', brand: 'Monte Carlo', price: 200, stock: 5 },
  { name: 'Hello', brand: 'Monte Carlo', price: 200, stock: 5 },
  { name: 'Hello', brand: 'Monte Carlo', price: 200, stock: 5 },
];
const caption = 'Products';

const Table = () => {
  return (
    <table className="bg-[#323232] text-white">
      <caption className="text-left bg-black">{caption}</caption>
      <thead className="bg-[#323212]">
        <tr>
          {heading.map((row, index) => (
            <th key={index} className="capitalize">
              {row}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
        </tr>
        <tr>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
        </tr>
        <tr>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
        </tr>
        <tr>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
        </tr>
        <tr>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
          <td>asdsd</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
