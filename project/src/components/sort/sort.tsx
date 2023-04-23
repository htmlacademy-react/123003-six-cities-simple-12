import { SortTypeToLabel } from '../../const';
import { setActiveSortType } from '../../store/action';
import { useAppDispatch } from '../../hooks/index';
import cn from 'classnames';
import { useState } from 'react';

type SortProps = {
  activeSortType: string;
}

function Sort({ activeSortType }: SortProps): JSX.Element {
  const dispatch = useAppDispatch();
  const [isSortListOpen, setSortListOpen] = useState<boolean>(false);

  return (
    <form className='places__sorting' action='#' method='get'>
      <span className='places__sorting-caption'>Sort by</span>
      <span
        className='places__sorting-type'
        tabIndex={0}
        style={{ marginLeft: 5 }}
        onClick={() => {
          setSortListOpen(true);
        }}
      >
        {activeSortType}
        <svg className='places__sorting-arrow' width='7' height='4'>
          <use xlinkHref='#icon-arrow-select'></use>
        </svg>
      </span>
      <ul className={cn('places__options places__options--custom', isSortListOpen && 'places__options--opened')}>
        {Object.values(SortTypeToLabel).map((type) => (
          <li
            className={cn('places__option', type === activeSortType && 'places__option--active')}
            tabIndex={0}
            key={type}
            onClick={() => {
              dispatch(setActiveSortType(type));
              // applySort(type);
              setSortListOpen(false);
            }}
          >
            {type}
          </li>
        ))}
      </ul>
    </form >
  );
}

export default Sort;
