import react from "react"
import "./Table.css"



const data = [
    { RollNo: 12, Name: "Aysuhi", Level:"1", Test:"yes" },
    { RollNo: 2, Name: "Sachi", Level:"4", Test:"yes" },
    { RollNo: 34, Name: "Khushi", Level:"2", Test:"yes"},
]
 
export default function Table() {
    return (
      <div>
        <div class="sm:overflow-hidden">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Vowels of the People Association</span>
            <button type="button" class="btn btn-secondary">Home</button>
        </div>
        </nav>
        <table class="table-auto">
                <tr>
                    <th>RollNo</th>
                    <th>Name</th>
                    <th>Level</th>
                    <th>Test</th>
                </tr>
                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td>{val.RollNo}</td>
                            <td>{val.Name}</td>
                            <td>{val.Level}</td>
                            <td>
                                
                            <select>  
                                    <option value="">
                                    <button type="button" class="btn" onClick={this.handlePrevClick}> &larr; Previous</button>
                                    </option>
                                    <option value="level2">Level2</option>

                                    <option value="level3">Level3</option>

                            </select>
                            </td>
                        </tr>
                    )
                })}
            </table>
            </div>
            </div>
    );
}