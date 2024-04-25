import { Heart } from 'lucide-react';

const FavoriteIcon = ({ filled, size, onClick }) => {
    return (
        <Heart 
            size={size} 
            fill={filled ? 'red' : 'none'} 
            stroke={filled ? 'none' : 'red'} 
            onClick={onClick} 
            style={{ cursor: 'pointer' }}
        />
    );
};

export default FavoriteIcon;
