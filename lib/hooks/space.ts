/* eslint-disable */
import type { Prisma, Space } from '@prisma/client';
import type { UseMutationOptions, UseQueryOptions, UseInfiniteQueryOptions, InfiniteData } from '@tanstack/react-query';
import { getHooksContext } from '@zenstackhq/tanstack-query/runtime-v5/react';
import { useModelQuery, useInfiniteModelQuery, useModelMutation } from '@zenstackhq/tanstack-query/runtime-v5/react';
import type { PickEnumerable, CheckSelect } from '@zenstackhq/tanstack-query/runtime-v5';
import metadata from './__model_meta';
type DefaultError = Error;

export function useCreateSpace(
    options?: Omit<UseMutationOptions<Space | undefined, unknown, Prisma.SpaceCreateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceCreateArgs, Space, true>(
        'Space',
        'POST',
        `${endpoint}/space/create`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceCreateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceCreateArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Space, Prisma.SpaceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useCreateManySpace(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceCreateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceCreateManyArgs, Prisma.BatchPayload, false>(
        'Space',
        'POST',
        `${endpoint}/space/createMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceCreateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SpaceCreateManyArgs>>,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useFindManySpace<
    TArgs extends Prisma.SpaceFindManyArgs,
    TQueryFnData = Array<Prisma.SpaceGetPayload<TArgs> & { $optimistic?: boolean }>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.SpaceFindManyArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'Space',
        `${endpoint}/space/findMany`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useInfiniteFindManySpace<
    TArgs extends Prisma.SpaceFindManyArgs,
    TQueryFnData = Array<Prisma.SpaceGetPayload<TArgs>>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.SpaceFindManyArgs>,
    options?: Omit<UseInfiniteQueryOptions<TQueryFnData, TError, InfiniteData<TData>>, 'queryKey'>,
) {
    options = options ?? { initialPageParam: undefined, getNextPageParam: () => null };
    const { endpoint, fetch } = getHooksContext();
    return useInfiniteModelQuery<TQueryFnData, TData, TError>(
        'Space',
        `${endpoint}/space/findMany`,
        args,
        options,
        fetch,
    );
}

export function useFindUniqueSpace<
    TArgs extends Prisma.SpaceFindUniqueArgs,
    TQueryFnData = Prisma.SpaceGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.SpaceFindUniqueArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'Space',
        `${endpoint}/space/findUnique`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useFindFirstSpace<
    TArgs extends Prisma.SpaceFindFirstArgs,
    TQueryFnData = Prisma.SpaceGetPayload<TArgs> & { $optimistic?: boolean },
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.SpaceFindFirstArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
    optimisticUpdate: boolean = true,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>(
        'Space',
        `${endpoint}/space/findFirst`,
        args,
        options,
        fetch,
        optimisticUpdate,
    );
}

export function useUpdateSpace(
    options?: Omit<UseMutationOptions<Space | undefined, unknown, Prisma.SpaceUpdateArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUpdateArgs, Space, true>(
        'Space',
        'PUT',
        `${endpoint}/space/update`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUpdateArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUpdateArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Space, Prisma.SpaceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useUpdateManySpace(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceUpdateManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUpdateManyArgs, Prisma.BatchPayload, false>(
        'Space',
        'PUT',
        `${endpoint}/space/updateMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUpdateManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SpaceUpdateManyArgs>>,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useUpsertSpace(
    options?: Omit<UseMutationOptions<Space | undefined, unknown, Prisma.SpaceUpsertArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceUpsertArgs, Space, true>(
        'Space',
        'POST',
        `${endpoint}/space/upsert`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceUpsertArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceUpsertArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Space, Prisma.SpaceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteSpace(
    options?: Omit<UseMutationOptions<Space | undefined, unknown, Prisma.SpaceDeleteArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceDeleteArgs, Space, true>(
        'Space',
        'DELETE',
        `${endpoint}/space/delete`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        true,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceDeleteArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>,
            options?: Omit<
                UseMutationOptions<
                    CheckSelect<T, Space, Prisma.SpaceGetPayload<T>> | undefined,
                    unknown,
                    Prisma.SelectSubset<T, Prisma.SpaceDeleteArgs>
                >,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as
                | CheckSelect<T, Space, Prisma.SpaceGetPayload<T>>
                | undefined;
        },
    };
    return mutation;
}

export function useDeleteManySpace(
    options?: Omit<UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SpaceDeleteManyArgs>, 'mutationFn'>,
    invalidateQueries: boolean = true,
    optimisticUpdate: boolean = false,
) {
    const { endpoint, fetch } = getHooksContext();
    const _mutation = useModelMutation<Prisma.SpaceDeleteManyArgs, Prisma.BatchPayload, false>(
        'Space',
        'DELETE',
        `${endpoint}/space/deleteMany`,
        metadata,
        options,
        fetch,
        invalidateQueries,
        false,
        optimisticUpdate,
    );
    const mutation = {
        ..._mutation,
        mutateAsync: async <T extends Prisma.SpaceDeleteManyArgs>(
            args: Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>,
            options?: Omit<
                UseMutationOptions<Prisma.BatchPayload, unknown, Prisma.SelectSubset<T, Prisma.SpaceDeleteManyArgs>>,
                'mutationFn'
            >,
        ) => {
            return (await _mutation.mutateAsync(args, options as any)) as Prisma.BatchPayload;
        },
    };
    return mutation;
}

export function useAggregateSpace<
    TArgs extends Prisma.SpaceAggregateArgs,
    TQueryFnData = Prisma.GetSpaceAggregateType<TArgs>,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<TArgs, Prisma.SpaceAggregateArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/aggregate`, args, options, fetch);
}

export function useGroupBySpace<
    TArgs extends Prisma.SpaceGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
        Prisma.Extends<'skip', Prisma.Keys<TArgs>>,
        Prisma.Extends<'take', Prisma.Keys<TArgs>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
        ? { orderBy: Prisma.SpaceGroupByArgs['orderBy'] }
        : { orderBy?: Prisma.SpaceGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<TArgs['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<TArgs['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<TArgs['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends TArgs['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
        ? `Error: "by" must not be empty.`
        : HavingValid extends Prisma.False
          ? {
                [P in HavingFields]: P extends ByFields
                    ? never
                    : P extends string
                      ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                      : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
            }[HavingFields]
          : 'take' extends Prisma.Keys<TArgs>
            ? 'orderBy' extends Prisma.Keys<TArgs>
                ? ByValid extends Prisma.True
                    ? {}
                    : {
                          [P in OrderFields]: P extends ByFields
                              ? never
                              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                      }[OrderFields]
                : 'Error: If you provide "take", you also need to provide "orderBy"'
            : 'skip' extends Prisma.Keys<TArgs>
              ? 'orderBy' extends Prisma.Keys<TArgs>
                  ? ByValid extends Prisma.True
                      ? {}
                      : {
                            [P in OrderFields]: P extends ByFields
                                ? never
                                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                        }[OrderFields]
                  : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends Prisma.True
                ? {}
                : {
                      [P in OrderFields]: P extends ByFields
                          ? never
                          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    TQueryFnData = {} extends InputErrors
        ? Array<
              PickEnumerable<Prisma.SpaceGroupByOutputType, TArgs['by']> & {
                  [P in keyof TArgs & keyof Prisma.SpaceGroupByOutputType]: P extends '_count'
                      ? TArgs[P] extends boolean
                          ? number
                          : Prisma.GetScalarType<TArgs[P], Prisma.SpaceGroupByOutputType[P]>
                      : Prisma.GetScalarType<TArgs[P], Prisma.SpaceGroupByOutputType[P]>;
              }
          >
        : InputErrors,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args: Prisma.SelectSubset<
        TArgs,
        Prisma.SubsetIntersection<TArgs, Prisma.SpaceGroupByArgs, OrderByArg> & InputErrors
    >,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/groupBy`, args, options, fetch);
}

export function useCountSpace<
    TArgs extends Prisma.SpaceCountArgs,
    TQueryFnData = TArgs extends { select: any }
        ? TArgs['select'] extends true
            ? number
            : Prisma.GetScalarType<TArgs['select'], Prisma.SpaceCountAggregateOutputType>
        : number,
    TData = TQueryFnData,
    TError = DefaultError,
>(
    args?: Prisma.SelectSubset<TArgs, Prisma.SpaceCountArgs>,
    options?: Omit<UseQueryOptions<TQueryFnData, TError, TData>, 'queryKey'>,
) {
    const { endpoint, fetch } = getHooksContext();
    return useModelQuery<TQueryFnData, TData, TError>('Space', `${endpoint}/space/count`, args, options, fetch);
}
