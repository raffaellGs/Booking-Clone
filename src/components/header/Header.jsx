import { faBed, faCalendarDays, faCar, faFerry, faPlane, fas, faTaxi, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.css'

import { DateRange } from 'react-date-range';
import { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";


const Header = ({ type }) => {
    const [openDate, setOpenDate] = useState(false);
    // SELECIONAR A DATA
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    // SELECIONAR QUANTIDADE DE PESSOAS
    const [openOptions, setOpenOtions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })

    const handleOption = (name, operation) => {
        setOptions(prev => {
            return {
                ...prev,
                [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
            }
        })
    }

    return (
        <div className='header'>
            <div className={type === 'list' ? 'hedaerContainer listMode' : 'hedaerContainer'}>

                <div className="headerList">
                    <div className="hedaerListItem active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Hospedagens</span>
                    </div>

                    <div className="hedaerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Voos</span>
                    </div>

                    <div className="hedaerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Alugel de Carros</span>
                    </div>

                    <div className="hedaerListItem">
                        <FontAwesomeIcon icon={faFerry} />
                        <span>Atrações</span>
                    </div>

                    <div className="hedaerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Táxi (aeroporto)</span>
                    </div>
                </div>

                {type !== 'list' &&
                    <><h1 className="hedaerTitile">Descontos vitalícios? Apenas com o Genius!</h1>
                        <p className="HedaerDesc">Receba recompensas pelas suas viagens – tenha descontos imediatos de 10% ou mais com uma conta Booking.com gratuita</p>
                        <button className="headerBtn">Inicir Sessão/ Registrar</button>

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon className='headerIcon' icon={faBed} />
                                <input className='headerSearchInput' type="text" placeholder='Para onde você vai?' />
                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon className='headerIcon' icon={faCalendarDays} />
                                <span onClick={() => setOpenDate(!openDate)} className='headerSearchItem'>{`${format(date[0].startDate, "dd/MM/yyyy")} até
                        ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>

                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className='Date'
                                />}

                            </div>

                            <div className="headerSearchItem">
                                <FontAwesomeIcon className='headerIcon' icon={faUser} />
                                <span onClick={() => setOpenOtions(!openOptions)} className='headerSearchText'>{`${options.adult} Adulto - ${options.children} Criança - ${options.room} Quartos`}</span>
                                {openOptions && <div className="options">
                                    <div className="optionItem">
                                        <span className="optionText">Adulto</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.adult <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption('adult', 'd')}>-
                                            </button>
                                            <span className='optionCountNumber'>{options.adult}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption('adult', 'i')}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Criança</span>
                                        <div className="optionCounter">
                                            <button disabled={options.children <= 0}
                                                className="optionCounterButton"
                                                onClick={() => handleOption('children', 'd')}>-
                                            </button>
                                            <span className='optionCountNumber'>{options.children}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption('children', 'i')}>+</button>
                                        </div>
                                    </div>

                                    <div className="optionItem">
                                        <span className="optionText">Quarto</span>
                                        <div className="optionCounter">
                                            <button
                                                disabled={options.room <= 1}
                                                className="optionCounterButton"
                                                onClick={() => handleOption('room', 'd')}>-
                                            </button>
                                            <span className='optionCountNumber'>{options.room}</span>
                                            <button className="optionCounterButton" onClick={() => handleOption('room', 'i')}>+</button>
                                        </div>
                                    </div>
                                </div>}
                            </div>

                            <div className="headerSearchItem">
                                <button className='headerBtn'>Pesquisar</button>
                            </div>
                        </div></>}
            </div>
        </div>
    )
}

export default Header