import React from "react";
import {BrowserRouter as Router, Link, NavLink} from "react-router-dom";
import Header_all_page from "./header_all_page";

// var SampleArray = ["รับ1", "จ่าย2", "รับ3", "จ่าย4", "รับ5", "จ่าย6", "รับ7", "จ่าย8", "รับ9", "จ่าย10", "รับ11", "จ่าย12"] ;
// localStorage.clear();

class Home extends React.Component {

    go_add = e => {
                window.location.assign("/add_list");
                console.log('ttt');
    }

    onSubmit = () => {
        this.props.history.push("/");
    };
    constructor(props) {
        super(props);

        this.state = {
            SampleArray: ["รับ1", "จ่าย2", "รับ3", "จ่าย4", "รับ5", "จ่าย6", "รับ7", "จ่าย8", "รับ9", "จ่าย10", "รับ11", "จ่าย12"]
        };
    }
    render() {
        return (
            <div className="form-wrapper_list">
                <Header_all_page />
                <div className="createAccount_add">
                    <button type="button" className="btn btn-light btn-lg" onClick={(e) => window.location.assign("/add_list") }>Add income or expense</button>
                </div>
                <table className="table ">
                    <thead className="thead_table">
                            <tr>
                                <th scope="col" width="27%" className="th-title">วันที่ทำรายการ</th>
                                <th scope="col" width="20%" className="th-title">รายการ</th>
                                <th scope="col" width="10%" className="th-title">งวด</th>
                                <th scope="col" width="10%" className="th-title">เงินต้น</th>
                                <th scope="col" width="10%" className="th-title">ดอกเบี้ย</th>
                                <th scope="col" width="15%" className="th-title">รวม</th>
                            </tr>
                    </thead>
                    <tbody>
                    {this.state.SampleArray.map(item => (
                            <tr className="th-title">
                                <td className="th-title">{item}</td>
                                <td className="th-title">{item}</td>
                                <td className="th-title">{item}</td>
                                <td className="th-title">{item}</td>
                                <td className="th-title">{item}</td>
                                <td className="th-body">
                                </td>
                            </tr>
                    ))}

                    </tbody>
                </table>

            </div>

        );
    }
}

export default Home;
