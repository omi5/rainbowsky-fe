// src/components/users/SearchAndFilter.tsx
import { SearchParams } from "@/types/applicant";

interface SearchAndFilterProps {
  params: SearchParams;
  onParamChange: (newParams: SearchParams) => void;
}

export default function SearchAndFilter({
  params,
  onParamChange,
}: SearchAndFilterProps) {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onParamChange({ ...params, query: e.target.value });
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onParamChange({
      ...params,
      type: e.target.value ? parseInt(e.target.value) : undefined,
    });
  };

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onParamChange({ ...params, gender: e.target.value || undefined });
  };

  const handleVerifiedChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onParamChange({
      ...params,
      verified: e.target.value === "" ? undefined : e.target.value === "true",
    });
  };

  const resetFilters = () => {
    onParamChange({
      query: "",
      type: undefined,
      gender: undefined,
      verified: undefined,
    });
  };

  return (
    <div className="mb-6 space-y-4">
      {/* Search Input */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full rounded-md border border-gray-300 bg-white py-2 pr-3 pl-10 leading-5 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
          placeholder="Search by name, email or phone"
          value={params.query || ""}
          onChange={handleSearchChange}
        />
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {/* Type Filter */}
        {/* <div className='w-full sm:w-auto'>
          <label
            htmlFor='type'
            className='mb-1 block text-sm font-medium text-gray-700'
          >
            Type
          </label>
          <select
            id='type'
            className='block w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm'
            value={params.type || ''}
            onChange={handleTypeChange}
          >
            <option value=''>All types</option>
            <option value='1'>Regular</option>
            <option value='2'>Premium</option>
          </select>
        </div> */}

        {/* Gender Filter */}
        <div className="w-full sm:w-auto">
          <label
            htmlFor="gender"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Gender
          </label>
          <select
            id="gender"
            className="block w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
            value={params.gender || ""}
            onChange={handleGenderChange}
          >
            <option value="">All genders</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Verified Filter */}
        <div className="w-full sm:w-auto">
          <label
            htmlFor="verified"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Status
          </label>
          <select
            id="verified"
            className="block w-full rounded-md border border-gray-300 py-2 pr-10 pl-3 text-base focus:border-blue-500 focus:ring-blue-500 focus:outline-none sm:text-sm"
            value={
              params.verified === undefined ? "" : params.verified.toString()
            }
            onChange={handleVerifiedChange}
          >
            <option value="">All statuses</option>
            <option value="true">Verified</option>
            <option value="false">Unverified</option>
          </select>
        </div>

        {/* Reset Button */}
        <div className="flex w-full items-end sm:w-auto">
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
}
