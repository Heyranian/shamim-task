import useStore from "../store/store";




function List() {
    const {
        items,
        selectedItems,
        sortedItems,
        isSortedByAge,
        toggleSelection,
        moveSelectedItems,
        toggleSort,
        reset
      } = useStore();
    
      return (
        <div className="flex flex-col items-center p-4">
          <div className="flex flex-col items-start w-64">
            <h2 className="text-lg font-semibold mb-2">Select Items</h2>
            <ul className="border border-gray-300 rounded p-2 w-full">
              {items.map((item) => (
                <li key={item.name} className="mb-1 flex justify-between items-center">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="form-checkbox"
                      checked={selectedItems.includes(item)}
                      onChange={() => toggleSelection(item)}
                    />
                    <span>{item.name} (Score: {item.score}, Age: {item.age})</span>
                  </label>
                </li>
              ))}
            </ul>
            <button
              onClick={moveSelectedItems}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
            >
              Move Selected Items
            </button>
            <button
              onClick={reset}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 w-full"
            >
              Reset
            </button>
          </div>
          <div className="mt-8 w-64">
            <h2 className="text-lg font-semibold mb-2">Sorted Items</h2>
            <ul className="border border-gray-300 rounded p-2 w-full">
              {sortedItems.map((item, index) => (
                <li key={item.name} className="mb-1 flex justify-between items-center">
                  <span className="font-bold">{index + 1}.</span>
                  <span>{item.name} (Score: {item.score}, Age: {item.age})</span>
                </li>
              ))}
            </ul>
            <button
              onClick={toggleSort}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 w-full"
            >
              Sort by {isSortedByAge ? 'Score' : 'Age'}
            </button>
          </div>
        </div>
      );
    }

export default List;
