# wards.json — vendored Vietnamese province/ward dataset

**Source:** [`thanglequoc/vietnamese-provinces-database`](https://github.com/thanglequoc/vietnamese-provinces-database)
file `json/vn_only_simplified_json_generated_data_vn_units_minified.json`.
**Copy:** byte-identical to `WeaverTestOnline/public/data/wards.json` (ported with the booking page, 2026-11-25); refresh both together.
**Pinned version:** `v3.1.0` (decree 30/2026). **License:** MIT.

Downloaded verbatim from the release tag (NOT hotlinked) — `raw.githubusercontent.com`
serves `text/plain` with a 5-min cache and live-couples us to upstream `master`, which
churns on every decree. We vendor a pinned copy instead.

**Shape (2-tier — districts were abolished July 2025, no middle level):**

```json
[ { "Code": "79", "FullName": "Thành phố Hồ Chí Minh",
    "Wards": [ { "Code": "25920", "FullName": "Phường Tân Hiệp", "ProvinceCode": "79" } ] } ]
```

34 provinces, ~3321 wards. `Code` values are **strings with leading zeros** (`"01"`,
`"00004"`) — never coerce to number.

**Refresh policy:** re-pull + eyeball on deploy, or bump manually when a decree lands:

```bash
curl -sL "https://raw.githubusercontent.com/thanglequoc/vietnamese-provinces-database/v3.1.0/json/vn_only_simplified_json_generated_data_vn_units_minified.json" \
  -o public/data/wards.json
```

Consumed by `src/features/booking/locationData.js` (`loadWards()` — fetched once on
field mount, held in memory). The booking form stores the official `Code` for province + ward as
the stable anchor across renames; display names are cosmetic.
