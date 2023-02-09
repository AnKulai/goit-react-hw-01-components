import PropTypes from 'prop-types';
import {
  Container,
  Title,
  List,
  Item,
  ItemTitle,
  ItemText,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title ? <Title>Upload stats</Title> : false}
      <List>
        {stats.map(el => (
          <Item className="item" key={el.id}>
            <ItemTitle className="label">{el.label}</ItemTitle>
            <ItemText className="percentage">{el.percentage}</ItemText>
          </Item>
        ))}
      </List>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
