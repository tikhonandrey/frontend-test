import {clearAllBodyScrollLocks, disableBodyScroll} from 'body-scroll-lock/lib/bodyScrollLock.es6';
import ButtonFilter from 'Components/filters/ButtonFilter';
import DropdownFilter from 'Components/filters/DropdownFilter';
import SwitchFilter from 'Components/filters/SwitchFilter';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateFilters} from 'Store/actions';
import {selectCategories, selectFilters} from 'Store/selectors';
import {buildFilterString, escapeHandler, svgDownArrow, svgX} from 'Utils';

const Filter = ({ready = false, startOpen = false, updateFilters, categories}) => {
    const [open, setOpen] = useState(startOpen);
    const [price, setPrice] = useState(null);
    const [openFilter, setOpenFilter] = useState(false);
    const [category, setCategory] = useState(null);

    const clearFilters = () => {
        setPrice(null);
        setOpenFilter(false);
        setCategory(null);
    };

    const openFilters = () => {
        if (!ready) return;
        setOpen(true);
        escapeHandler(() => setOpen(false));
    };

    const openFilterElement = document.querySelector('#filter-modal');
    open ? disableBodyScroll(openFilterElement) : clearAllBodyScrollLocks();
console.dir({categories})
    return (
        <div className={`filter ${open ? 'open' : 'closed'}`}>
            <div id='filter-modal' className='filter-open'>
                <div className='row'>
                    <div className='label'>Filter By</div>
                    {svgX({className: 'cross', onClick: () => setOpen(false)})}
                </div>
                <div className='hr full'/>
                <div className='row'>
                    <div className='button clear' onClick={clearFilters}>Clear All</div>
                    <div className='button-spacer'/>
                    <div className='button apply' onClick={() => {
                        updateFilters({open_now: openFilter, price, categories: category && category.toLowerCase()});
                        setOpen(false);
                    }}>
                        Apply
                    </div>
                </div>
                <div className='hr full'/>
                <SwitchFilter
                    label='Open Now'
                    filter={openFilter}
                    onFilterChange={setOpenFilter}
                />
                <div className='hr'/>
                <ButtonFilter
                    label='price'
                    defaultOff={'all'}
                    filter={price || 'all'} onFilterChange={setPrice}
                    options={['$', '$$', '$$$', '$$$$']}
                />
                <div className='hr'/>
                <DropdownFilter
                    label='categories' help='Select One'
                    filter={category} onFilterChange={setCategory}
                    options={[null, ...categories]}
                />
                <div className='hr'/>
            </div>
            <div className='filter-closed row'>
                <div className='label'>Filter By:</div>
                <div className='dropdown' onClick={openFilters}>
                    <div className='content'>{buildFilterString({price, category, open: openFilter})}</div>
                    {svgDownArrow()}
                </div>
            </div>
        </div>
    );
};

export default connect(state => ({
    filters: selectFilters(state),
    categories: selectCategories(state),
}), {
    updateFilters,
})(Filter);
