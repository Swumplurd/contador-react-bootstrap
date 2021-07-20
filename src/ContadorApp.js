import PropTypes from 'prop-types';
import {useState} from 'react';

const ContadorApp = ({value}) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        return setCounter(counter + 1);
    }

    const handleReset = () => {
        return setCounter(value);
    }

    const handleLess = () => {
        return setCounter(counter - 1);
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4 offset-4">
                        <div className="card p-3">
                            <h3 className="text-center">{counter}</h3>
                            <div className="card-body">
                                <h5 className="card-title">Contador</h5>
                                <p className="card-text">Da click en el boton para incrementar el contador...</p>
                                <div className="text-center">
                                    <button className="btn btn-info mx-2" onClick={handleLess}>-1</button>
                                    <button className="btn btn-info mx-2" onClick={handleReset}>Reset</button>
                                    <button className="btn btn-info mx-2" onClick={handleAdd}>+1</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

ContadorApp.propTypes = {
    value: PropTypes.number
}

export default ContadorApp;