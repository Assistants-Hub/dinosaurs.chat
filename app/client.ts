import useSWR from 'swr';
import { useMemo } from 'react';
import {DinosaurCollection} from "@/app/dinosaur";

export const fetcher = (url: string) => fetch(url).then((r) => r.json());
export function useGetDinosaurs() {
    let { data, isLoading, error, isValidating, mutate } = useSWR(
        '/api/dinosaurs',
        fetcher,
        {
            revalidateIfStale: true,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        }
    );

    return useMemo(
        () => ({
            dinosaurCollection: data as DinosaurCollection,
            dinosaurCollectionLoading: isLoading,
            dinosaurCollectionError: error,
            dinosaurCollectionValidating: isValidating,
            dinosaurCollectionEmpty: !isLoading,
            mutate: mutate,
        }),
        [data, error, isLoading, isValidating, mutate]
    );
}