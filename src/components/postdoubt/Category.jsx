export default function Category({ref}) {
    return (
      <>
        <div>
          <h2>Category</h2>
          <div>
            <select
              className="w-2/3 h-[50px] border-2 border-gray-300 rounded-md"
              ref={ref}
            >
              <option value="0">Select Category</option>
              <option value="Maths">Maths</option>
              <option value="DSA">DSA</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="AI/ML">AI/ML</option>
            </select>
          </div>
        </div>
      </>
    );
}
