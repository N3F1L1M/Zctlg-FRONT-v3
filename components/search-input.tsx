'use client';

import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchSuggestion {
  id: string;
  text: string;
  category?: string;
}

interface SearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  suggestions?: SearchSuggestion[];
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void;
}

export default function SearchInput({
  placeholder = 'Buscar...',
  onSearch,
  suggestions = [],
  onSuggestionSelect,
}: SearchInputProps) {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Filtrar sugerencias basadas en el input
  useEffect(() => {
    if (value.trim()) {
      const filtered = suggestions.filter((s) =>
        s.text.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered);
      setIsOpen(true);
      setHighlightedIndex(-1);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
    }
  }, [value, suggestions]);

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0) {
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        } else if (value.trim()) {
          handleSearch();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
    }
  };

  const handleSelectSuggestion = (suggestion: SearchSuggestion) => {
    setValue(suggestion.text);
    setIsOpen(false);
    onSuggestionSelect?.(suggestion);
    onSearch?.(suggestion.text);
  };

  const handleSearch = () => {
    if (value.trim()) {
      onSearch?.(value);
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setValue('');
    setFilteredSuggestions([]);
    setIsOpen(false);
    inputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="relative w-full max-w-2xl mx-auto">
      {/* Input Container */}
      <div className="relative flex items-center border border-input bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
        <Search className="w-5 h-5 text-muted-foreground ml-3 flex-shrink-0" />

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => value && setIsOpen(true)}
          placeholder={placeholder}
          className="flex-1 px-3 py-2.5 bg-transparent text-foreground placeholder-muted-foreground outline-none"
        />

        {value && (
          <button
            onClick={handleClear}
            className="mr-3 p-1 hover:bg-muted rounded-md transition-colors duration-150"
            aria-label="Limpiar búsqueda"
          >
            <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </button>
        )}

        <button
          onClick={handleSearch}
          disabled={!value.trim()}
          className="mr-3 px-4 py-1.5 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity duration-150 disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
        >
          Buscar
        </button>
      </div>

      {/* Dropdown de Sugerencias */}
      {isOpen && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-input rounded-lg shadow-lg z-50">
          <ul className="max-h-96 overflow-y-auto">
            {filteredSuggestions.map((suggestion, index) => (
              <li
                key={suggestion.id}
                onClick={() => handleSelectSuggestion(suggestion)}
                className={`px-4 py-3 cursor-pointer flex items-center justify-between transition-colors duration-150 border-b border-border last:border-b-0 ${
                  index === highlightedIndex
                    ? 'bg-muted'
                    : 'hover:bg-muted/50'
                }`}
              >
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                  <span className="text-foreground truncate">
                    {suggestion.text}
                  </span>
                </div>
                {suggestion.category && (
                  <span className="ml-2 text-xs text-muted-foreground bg-muted px-2 py-1 rounded flex-shrink-0">
                    {suggestion.category}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mensaje cuando no hay resultados */}
      {isOpen && value && filteredSuggestions.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-background border border-input rounded-lg shadow-lg z-50 p-4 text-center">
          <p className="text-muted-foreground text-sm">
            No se encontraron sugerencias para "{value}"
          </p>
        </div>
      )}
    </div>
  );
}
