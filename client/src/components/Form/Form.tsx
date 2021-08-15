import React, {memo, useCallback, useMemo, useState} from "react";
import {bookGenres, API_URL} from "../../constants";
import "./Form.scss";

const DEFAULT_SELECT_TEXT = 'Choose a book genre';

const Form: React.FC = () => {
    const [selectValue, setSelectValue] = useState(DEFAULT_SELECT_TEXT);

    const fetchData = useCallback(() => {
        fetch(`${API_URL}${selectValue}`);
    }, [selectValue]);

    const buttonDisabled = useMemo(() => selectValue === DEFAULT_SELECT_TEXT,
        [selectValue]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(e.target.value)
    }, [setSelectValue]);

    return <form className="form" onSubmit={fetchData}>
        <select value={selectValue}
                onChange={handleChange}
                className="form__select">
            <option disabled
                    value={DEFAULT_SELECT_TEXT}
                    className="form__select-option--disabled">
                {DEFAULT_SELECT_TEXT}
            </option>
            {bookGenres.map((bookGenre: string, index: number) => {
                return <option key={index}
                               value={bookGenre}
                               className="form__select-option">
                    {bookGenre}
                </option>
            })}
        </select>
        <button className="form__button" disabled={buttonDisabled}>
            Find the book
        </button>
    </form>
}

export default memo(Form);
