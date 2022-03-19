import { useTheme } from '../hooks/useTheme';
import './ThemeSelector.css';
import modeIcon from '../assets/modeIcon.svg';

const themeColors = ['#58249c', '#249c6b', '#b70233'];

function ThemeSelector() {
    const { changeColor, changeMode, mode } = useTheme();

    const toggleMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="theme-selector">
            <div className="mode-toggle">
                <img
                    onClick={toggleMode}
                    src={modeIcon}
                    alt="Light/Dark Mode Toggle"
                    style={{
                        filter: mode === 'dark' ? 'invert(90%)' : 'invert(20%)',
                        width: '35px',
                        height: 'auto',
                    }}
                />
            </div>
            <div className="theme-buttons">
                {themeColors.map((color) => (
                    <div
                        key={color}
                        onClick={() => changeColor(color)}
                        style={{ backgroundColor: color }}
                    ></div>
                ))}
            </div>
        </div>
    );
}

export default ThemeSelector;
