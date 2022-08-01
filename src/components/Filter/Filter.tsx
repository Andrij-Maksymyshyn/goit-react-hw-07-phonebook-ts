import { useAppDispatch } from '../../hook';
import { updateFilter } from '../../redux/PhonebookSlice';
import { LabelFil, InputFil } from './Filter.styled';

const Filter = () => {
  const dispatch = useAppDispatch();

  return (  
  <LabelFil>
    Find contacts by name
      <InputFil
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(updateFilter(e.currentTarget.value))}
      />
  </LabelFil>
)
};

export default Filter;


