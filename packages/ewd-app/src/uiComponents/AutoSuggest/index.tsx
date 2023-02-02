import React, { useState } from "react";
import uuid from "react-uuid";
import "./AutoSuggest.scss";

interface Props {
  placeholder: string;
  suggestions: string[];
  onChange: any;
  data_testid: string;
}

const AutoSuggest: React.FC<Props> = ({
  suggestions,
  placeholder,
  onChange,
  data_testid,
}) => {
  //Initialization
  const [value, setValue] = useState<string>("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setValue(inputValue);
    onChange(inputValue);

    setFilteredSuggestions(
      suggestions.filter((suggestion) =>
        suggestion.toLowerCase().startsWith(inputValue.toLowerCase())
      )
    );
    setShowSuggestions(true);
    setHighlightedIndex(-1);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setValue(suggestion);
    onChange(suggestion);
    setShowSuggestions(false);
    setFilteredSuggestions([]);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex + 1 === filteredSuggestions.length ? 0 : prevIndex + 1
      );
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlightedIndex((prevIndex) =>
        prevIndex === 0 ? filteredSuggestions.length - 1 : prevIndex - 1
      );
    } else if (event.key === "Enter" && filteredSuggestions[highlightedIndex]) {
      handleSuggestionClick(filteredSuggestions[highlightedIndex]);
    } else if (event.key === "Escape") {
      setShowSuggestions(false);
    }
  };

  const suggestionList = filteredSuggestions.map(
    (suggestion, index: number) => (
      <li
        key={suggestion}
        className={index === highlightedIndex ? "highlighted" : ""}
        onClick={() => handleSuggestionClick(suggestion)}
      >
        {suggestion}
      </li>
    )
  );

  return (
    <div className="AutoSuggestInput">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className=""
        data-testid={data_testid}
      />
      {showSuggestions && value.length ? (
        <ul className="AutoSuggestList">{suggestionList}</ul>
      ) : null}
    </div>
  );
};

export default AutoSuggest;
