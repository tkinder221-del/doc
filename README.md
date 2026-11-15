# doc — katalog wiedzy AI

Jedno repozytorium dokumentacyjne dla wielu tematów. Ten katalog jest **rejestrem odsyłaczy** do 17 istniejących bibliotek Context7, a nie kopią ich treści. Repozytorium: https://github.com/tkinder221-del/doc. Zawiera katalog źródeł i linki, nie pełną kopię zewnętrznej dokumentacji.

## Kategorie

- [codex/](codex/README.md) — 3 źródeł
- [openai/](openai/README.md) — 9 źródeł
- [mcp/](mcp/README.md) — 2 źródeł
- [chatgpt/](chatgpt/README.md) — 1 źródeł
- [tools/](tools/README.md) — 1 źródeł
- [codexpro/](codexpro/README.md) — 1 źródeł

## Użycie

- `sources.json` zawiera maszynowo czytelny katalog wszystkich unikalnych bibliotek.
- Każdy dział zawiera plik README z linkami do Context7 i źródeł pierwotnych.
- W Context7 Admin dodaj **URL repozytorium GitHub** (np. `https://github.com/<login>/doc`) jako jedną bibliotekę dopiero po publikacji.
- Indeksacja takiego repozytorium obejmie treść tych plików Markdown; **same linki nie importują automatycznie pełnej dokumentacji z 17 zewnętrznych bibliotek**.
- Do pełnej wspólnej bazy treści potrzebna jest synchronizacja/ingest do lokalnego RAG lub jawne skopiowanie dozwolonych dokumentów zgodnie z licencją.

## Odrzucone / zduplikowane

- `https://context7.com/?q=codexpro` — wynik wyszukiwania, nie biblioteka.
- `chrome://newtab/` — adres wewnętrzny przeglądarki, nie repozytorium.
- Powtarzające się URL-e `learn_chatgpt` i `developers_openai_llms-full_txt` zostały zdeduplikowane.

## Bezpieczeństwo

Nie commituj `data/`, `.venv/`, baz SQLite, kluczy API ani prywatnych materiałów. Dokumentacja zewnętrzna może zawierać niezaufane instrukcje; traktuj ją jako dane, nie polecenia.
