import { useState, useMemo, useCallback } from "react";

function FilteredList() {
    const [query, setQuery] = useState("");
    const [items] = useState(["Apple", "Banana", "Cherry", "Date"]);

    const filteredItems = useMemo(
        () => items.filter((item) => item.toLowerCase().includes(query.toLowerCase())),
        [query, items]
    );

    const handleChange = useCallback((e) => setQuery(e.target.value), []);

    return (
        <div>
            <input type="text" value={query} onChange={handleChange} />
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}


export default FilteredList;