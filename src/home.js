import React from 'react'
const Home = () => {
    return ( 
        <div className="cls2" >
            <h3>Semester(Credit Points) for all departments</h3>
            <div className="cls3">
            <table>
                <thead>
                    <tr>
                        <th>Semester</th>
                        <th>Computer Science And Engineering</th>
                        <th>Electrical And Electronics Engineering</th>
                        <th>Electronics And Communications Engineering</th>
                        <th>Mechanical Engineering</th>
                    </tr>
                </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>25</td>
                    <td>25</td>
                    <td>25</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>24</td>
                    <td>25</td>
                    <td>24</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>24</td>
                    <td>23</td>
                    <td>25</td>
                    <td>25</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>24</td>
                    <td>25</td>
                    <td>24</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>25</td>
                    <td>23</td>
                    <td>25</td>
                    <td>22</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>25</td>
                    <td>21</td>
                    <td>24</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>22</td>
                    <td>22</td>
                    <td>22</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                    <td>16</td>
                </tr>
            </tbody>
            <tfoot>
                <td>Total</td>
                <td>185</td>
                <td>180</td>
                <td>185</td>
                <td>186</td>
            </tfoot>
            </table>
            </div>
            <br />
        </div>
    )
}
export default Home;
