#define ICALL_TABLE_corlib 1

static int corlib_icall_indexes [] = {
184,
193,
194,
195,
196,
197,
198,
199,
201,
202,
258,
259,
260,
283,
284,
285,
300,
301,
302,
389,
390,
391,
394,
424,
425,
427,
429,
431,
433,
438,
446,
447,
448,
449,
450,
451,
452,
453,
528,
535,
536,
605,
611,
614,
616,
621,
622,
624,
625,
629,
630,
632,
633,
636,
637,
638,
641,
643,
646,
648,
650,
659,
717,
719,
721,
731,
732,
733,
735,
740,
741,
742,
743,
744,
752,
753,
754,
758,
759,
761,
763,
947,
1104,
1105,
6599,
6600,
6602,
6603,
6604,
6605,
6606,
6608,
6609,
6610,
6625,
6627,
6632,
6634,
6636,
6638,
6689,
6690,
6692,
6693,
6694,
6695,
6696,
6698,
6700,
7648,
7652,
7654,
7655,
7656,
7657,
8040,
8041,
8042,
8043,
8059,
8060,
8061,
8104,
8168,
8178,
8179,
8180,
8181,
8182,
8444,
8448,
8449,
8476,
8510,
8517,
8524,
8535,
8538,
8559,
8634,
8636,
8645,
8647,
8648,
8655,
8670,
8690,
8691,
8699,
8701,
8708,
8709,
8712,
8717,
8723,
8724,
8731,
8733,
8745,
8748,
8749,
8750,
8761,
8771,
8777,
8778,
8779,
8781,
8782,
8799,
8801,
8816,
8834,
8861,
8885,
8886,
9353,
9432,
9433,
9585,
9586,
9590,
9593,
9638,
10011,
10012,
10213,
10217,
10227,
10841,
10862,
10864,
10866,
};
void ves_icall_System_Array_InternalCreate (int,int,int,int,int);
int ves_icall_System_Array_GetCorElementTypeOfElementTypeInternal (int);
int ves_icall_System_Array_CanChangePrimitive (int,int,int);
int ves_icall_System_Array_FastCopy (int,int,int,int,int);
int ves_icall_System_Array_GetLengthInternal_raw (int,int,int);
int ves_icall_System_Array_GetLowerBoundInternal_raw (int,int,int);
void ves_icall_System_Array_GetGenericValue_icall (int,int,int);
void ves_icall_System_Array_GetValueImpl_raw (int,int,int,int);
void ves_icall_System_Array_SetValueImpl_raw (int,int,int,int);
void ves_icall_System_Array_SetValueRelaxedImpl_raw (int,int,int,int);
void ves_icall_System_Runtime_RuntimeImports_ZeroMemory (int,int);
void ves_icall_System_Runtime_RuntimeImports_Memmove (int,int,int);
void ves_icall_System_Buffer_BulkMoveWithWriteBarrier (int,int,int,int);
int ves_icall_System_Delegate_AllocDelegateLike_internal_raw (int,int);
int ves_icall_System_Delegate_CreateDelegate_internal_raw (int,int,int,int,int);
int ves_icall_System_Delegate_GetVirtualMethod_internal_raw (int,int);
void ves_icall_System_Enum_GetEnumValuesAndNames_raw (int,int,int,int);
int ves_icall_System_Enum_InternalGetCorElementType (int);
void ves_icall_System_Enum_InternalGetUnderlyingType_raw (int,int,int);
int ves_icall_System_Environment_get_ProcessorCount ();
int ves_icall_System_Environment_get_TickCount ();
int64_t ves_icall_System_Environment_get_TickCount64 ();
void ves_icall_System_Environment_FailFast_raw (int,int,int,int);
void ves_icall_System_GC_register_ephemeron_array_raw (int,int);
int ves_icall_System_GC_get_ephemeron_tombstone_raw (int);
void ves_icall_System_GC_SuppressFinalize_raw (int,int);
void ves_icall_System_GC_ReRegisterForFinalize_raw (int,int);
void ves_icall_System_GC_GetGCMemoryInfo (int,int,int,int,int,int);
int ves_icall_System_GC_AllocPinnedArray_raw (int,int,int);
int ves_icall_System_Object_MemberwiseClone_raw (int,int);
double ves_icall_System_Math_Ceiling (double);
double ves_icall_System_Math_Cos (double);
double ves_icall_System_Math_Floor (double);
double ves_icall_System_Math_Pow (double,double);
double ves_icall_System_Math_Sin (double);
double ves_icall_System_Math_Sqrt (double);
double ves_icall_System_Math_Tan (double);
double ves_icall_System_Math_ModF (double,int);
int ves_icall_RuntimeMethodHandle_GetFunctionPointer_raw (int,int);
void ves_icall_RuntimeMethodHandle_ReboxFromNullable_raw (int,int,int);
void ves_icall_RuntimeMethodHandle_ReboxToNullable_raw (int,int,int,int);
int ves_icall_RuntimeType_GetCorrespondingInflatedMethod_raw (int,int,int);
void ves_icall_RuntimeType_make_array_type_raw (int,int,int,int);
void ves_icall_RuntimeType_make_byref_type_raw (int,int,int);
void ves_icall_RuntimeType_make_pointer_type_raw (int,int,int);
void ves_icall_RuntimeType_MakeGenericType_raw (int,int,int,int);
int ves_icall_RuntimeType_GetMethodsByName_native_raw (int,int,int,int,int);
int ves_icall_RuntimeType_GetPropertiesByName_native_raw (int,int,int,int,int);
int ves_icall_RuntimeType_GetConstructors_native_raw (int,int,int);
int ves_icall_System_RuntimeType_CreateInstanceInternal_raw (int,int);
void ves_icall_RuntimeType_GetDeclaringMethod_raw (int,int,int);
void ves_icall_System_RuntimeType_getFullName_raw (int,int,int,int,int);
void ves_icall_RuntimeType_GetGenericArgumentsInternal_raw (int,int,int,int);
int ves_icall_RuntimeType_GetGenericParameterPosition (int);
int ves_icall_RuntimeType_GetEvents_native_raw (int,int,int,int);
int ves_icall_RuntimeType_GetFields_native_raw (int,int,int,int,int);
void ves_icall_RuntimeType_GetInterfaces_raw (int,int,int);
int ves_icall_RuntimeType_GetNestedTypes_native_raw (int,int,int,int,int);
void ves_icall_RuntimeType_GetDeclaringType_raw (int,int,int);
void ves_icall_RuntimeType_GetName_raw (int,int,int);
void ves_icall_RuntimeType_GetNamespace_raw (int,int,int);
int ves_icall_RuntimeType_FunctionPointerReturnAndParameterTypes_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetAttributes (int);
int ves_icall_RuntimeTypeHandle_GetMetadataToken_raw (int,int);
void ves_icall_RuntimeTypeHandle_GetGenericTypeDefinition_impl_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_GetCorElementType (int);
int ves_icall_RuntimeTypeHandle_HasInstantiation (int);
int ves_icall_RuntimeTypeHandle_IsInstanceOfType_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_HasReferences_raw (int,int);
int ves_icall_RuntimeTypeHandle_GetArrayRank_raw (int,int);
void ves_icall_RuntimeTypeHandle_GetAssembly_raw (int,int,int);
void ves_icall_RuntimeTypeHandle_GetElementType_raw (int,int,int);
void ves_icall_RuntimeTypeHandle_GetModule_raw (int,int,int);
void ves_icall_RuntimeTypeHandle_GetBaseType_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_type_is_assignable_from_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_IsGenericTypeDefinition (int);
int ves_icall_RuntimeTypeHandle_GetGenericParameterInfo_raw (int,int);
int ves_icall_RuntimeTypeHandle_is_subclass_of_raw (int,int,int);
int ves_icall_RuntimeTypeHandle_IsByRefLike_raw (int,int);
void ves_icall_System_RuntimeTypeHandle_internal_from_name_raw (int,int,int,int,int,int);
int ves_icall_System_String_FastAllocateString_raw (int,int);
int ves_icall_System_Type_internal_from_handle_raw (int,int);
int ves_icall_System_ValueType_InternalGetHashCode_raw (int,int,int);
int ves_icall_System_ValueType_Equals_raw (int,int,int,int);
int ves_icall_System_Threading_Interlocked_CompareExchange_Int (int,int,int);
void ves_icall_System_Threading_Interlocked_CompareExchange_Object (int,int,int,int);
int ves_icall_System_Threading_Interlocked_Decrement_Int (int);
int ves_icall_System_Threading_Interlocked_Increment_Int (int);
int64_t ves_icall_System_Threading_Interlocked_Increment_Long (int);
int ves_icall_System_Threading_Interlocked_Exchange_Int (int,int);
void ves_icall_System_Threading_Interlocked_Exchange_Object (int,int,int);
int64_t ves_icall_System_Threading_Interlocked_CompareExchange_Long (int,int64_t,int64_t);
int64_t ves_icall_System_Threading_Interlocked_Exchange_Long (int,int64_t);
int ves_icall_System_Threading_Interlocked_Add_Int (int,int);
void ves_icall_System_Threading_Monitor_Monitor_Enter_raw (int,int);
void mono_monitor_exit_icall_raw (int,int);
void ves_icall_System_Threading_Monitor_Monitor_pulse_raw (int,int);
void ves_icall_System_Threading_Monitor_Monitor_pulse_all_raw (int,int);
int ves_icall_System_Threading_Monitor_Monitor_wait_raw (int,int,int,int);
void ves_icall_System_Threading_Monitor_Monitor_try_enter_with_atomic_var_raw (int,int,int,int,int);
void ves_icall_System_Threading_Thread_InitInternal_raw (int,int);
int ves_icall_System_Threading_Thread_GetCurrentThread ();
void ves_icall_System_Threading_InternalThread_Thread_free_internal_raw (int,int);
int ves_icall_System_Threading_Thread_GetState_raw (int,int);
void ves_icall_System_Threading_Thread_SetState_raw (int,int,int);
void ves_icall_System_Threading_Thread_ClrState_raw (int,int,int);
void ves_icall_System_Threading_Thread_SetName_icall_raw (int,int,int,int);
int ves_icall_System_Threading_Thread_YieldInternal ();
void ves_icall_System_Threading_Thread_SetPriority_raw (int,int,int);
void ves_icall_System_Runtime_Loader_AssemblyLoadContext_PrepareForAssemblyLoadContextRelease_raw (int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_GetLoadContextForAssembly_raw (int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFile_raw (int,int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalInitializeNativeALC_raw (int,int,int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFromStream_raw (int,int,int,int,int,int);
int ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalGetLoadedAssemblies_raw (int);
int ves_icall_System_GCHandle_InternalAlloc_raw (int,int,int);
void ves_icall_System_GCHandle_InternalFree_raw (int,int);
int ves_icall_System_GCHandle_InternalGet_raw (int,int);
void ves_icall_System_GCHandle_InternalSet_raw (int,int,int);
int ves_icall_System_Runtime_InteropServices_Marshal_GetLastPInvokeError ();
void ves_icall_System_Runtime_InteropServices_Marshal_SetLastPInvokeError (int);
void ves_icall_System_Runtime_InteropServices_Marshal_StructureToPtr_raw (int,int,int,int);
int ves_icall_System_Runtime_InteropServices_NativeLibrary_LoadByName_raw (int,int,int,int,int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InternalGetHashCode_raw (int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetUninitializedObjectInternal_raw (int,int);
void ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InitializeArray_raw (int,int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetSpanDataFrom_raw (int,int,int,int);
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_SufficientExecutionStack ();
int ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InternalBox_raw (int,int,int);
int ves_icall_System_Reflection_Assembly_GetEntryAssembly_raw (int);
int ves_icall_System_Reflection_Assembly_InternalLoad_raw (int,int,int,int);
int ves_icall_System_Reflection_Assembly_InternalGetType_raw (int,int,int,int,int,int);
int ves_icall_System_Reflection_AssemblyName_GetNativeName (int);
int ves_icall_MonoCustomAttrs_GetCustomAttributesInternal_raw (int,int,int,int);
int ves_icall_MonoCustomAttrs_GetCustomAttributesDataInternal_raw (int,int);
int ves_icall_MonoCustomAttrs_IsDefinedInternal_raw (int,int,int);
int ves_icall_System_Reflection_FieldInfo_internal_from_handle_type_raw (int,int,int);
int ves_icall_System_Reflection_FieldInfo_get_marshal_info_raw (int,int);
int ves_icall_System_Reflection_LoaderAllocatorScout_Destroy (int);
void ves_icall_System_Reflection_RuntimeAssembly_GetManifestResourceNames_raw (int,int,int);
void ves_icall_System_Reflection_RuntimeAssembly_GetExportedTypes_raw (int,int,int);
void ves_icall_System_Reflection_RuntimeAssembly_GetInfo_raw (int,int,int,int);
int ves_icall_System_Reflection_RuntimeAssembly_GetManifestResourceInternal_raw (int,int,int,int,int);
void ves_icall_System_Reflection_Assembly_GetManifestModuleInternal_raw (int,int,int);
void ves_icall_System_Reflection_RuntimeCustomAttributeData_ResolveArgumentsInternal_raw (int,int,int,int,int,int,int);
void ves_icall_RuntimeEventInfo_get_event_info_raw (int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_System_Reflection_EventInfo_internal_from_handle_type_raw (int,int,int);
int ves_icall_RuntimeFieldInfo_ResolveType_raw (int,int);
int ves_icall_RuntimeFieldInfo_GetParentType_raw (int,int,int);
int ves_icall_RuntimeFieldInfo_GetFieldOffset_raw (int,int);
int ves_icall_RuntimeFieldInfo_GetValueInternal_raw (int,int,int);
int ves_icall_RuntimeFieldInfo_GetRawConstantValue_raw (int,int);
int ves_icall_reflection_get_token_raw (int,int);
void ves_icall_get_method_info_raw (int,int,int);
int ves_icall_get_method_attributes (int);
int ves_icall_System_Reflection_MonoMethodInfo_get_parameter_info_raw (int,int,int);
int ves_icall_System_MonoMethodInfo_get_retval_marshal_raw (int,int);
int ves_icall_System_Reflection_RuntimeMethodInfo_GetMethodFromHandleInternalType_native_raw (int,int,int,int);
int ves_icall_RuntimeMethodInfo_get_name_raw (int,int);
int ves_icall_RuntimeMethodInfo_get_base_method_raw (int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_InternalInvoke_raw (int,int,int,int,int);
void ves_icall_RuntimeMethodInfo_GetPInvoke_raw (int,int,int,int,int);
int ves_icall_RuntimeMethodInfo_MakeGenericMethod_impl_raw (int,int,int);
int ves_icall_RuntimeMethodInfo_GetGenericArguments_raw (int,int);
int ves_icall_RuntimeMethodInfo_GetGenericMethodDefinition_raw (int,int);
int ves_icall_RuntimeMethodInfo_get_IsGenericMethodDefinition_raw (int,int);
int ves_icall_RuntimeMethodInfo_get_IsGenericMethod_raw (int,int);
void ves_icall_InvokeClassConstructor_raw (int,int);
int ves_icall_InternalInvoke_raw (int,int,int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_System_Reflection_RuntimeModule_ResolveMethodToken_raw (int,int,int,int,int,int);
void ves_icall_RuntimePropertyInfo_get_property_info_raw (int,int,int,int);
int ves_icall_reflection_get_token_raw (int,int);
int ves_icall_System_Reflection_RuntimePropertyInfo_internal_from_handle_type_raw (int,int,int);
void ves_icall_DynamicMethod_create_dynamic_method_raw (int,int,int,int,int);
void ves_icall_AssemblyBuilder_basic_init_raw (int,int);
void ves_icall_AssemblyBuilder_UpdateNativeCustomAttributes_raw (int,int);
void ves_icall_ModuleBuilder_basic_init_raw (int,int);
void ves_icall_ModuleBuilder_set_wrappers_type_raw (int,int,int);
int ves_icall_ModuleBuilder_getToken_raw (int,int,int,int);
void ves_icall_ModuleBuilder_RegisterToken_raw (int,int,int,int);
int ves_icall_TypeBuilder_create_runtime_class_raw (int,int);
int ves_icall_System_IO_Stream_HasOverriddenBeginEndRead_raw (int,int);
int ves_icall_System_IO_Stream_HasOverriddenBeginEndWrite_raw (int,int);
int ves_icall_System_Diagnostics_Debugger_IsAttached_internal ();
int ves_icall_System_Diagnostics_StackFrame_GetFrameInfo (int,int,int,int,int,int,int,int);
void ves_icall_System_Diagnostics_StackTrace_GetTrace (int,int,int,int);
int ves_icall_Mono_RuntimeClassHandle_GetTypeFromClass (int);
void ves_icall_Mono_RuntimeGPtrArrayHandle_GPtrArrayFree (int);
int ves_icall_Mono_SafeStringMarshal_StringToUtf8 (int);
void ves_icall_Mono_SafeStringMarshal_GFree (int);
static void *corlib_icall_funcs [] = {
// token 184,
ves_icall_System_Array_InternalCreate,
// token 193,
ves_icall_System_Array_GetCorElementTypeOfElementTypeInternal,
// token 194,
ves_icall_System_Array_CanChangePrimitive,
// token 195,
ves_icall_System_Array_FastCopy,
// token 196,
ves_icall_System_Array_GetLengthInternal_raw,
// token 197,
ves_icall_System_Array_GetLowerBoundInternal_raw,
// token 198,
ves_icall_System_Array_GetGenericValue_icall,
// token 199,
ves_icall_System_Array_GetValueImpl_raw,
// token 201,
ves_icall_System_Array_SetValueImpl_raw,
// token 202,
ves_icall_System_Array_SetValueRelaxedImpl_raw,
// token 258,
ves_icall_System_Runtime_RuntimeImports_ZeroMemory,
// token 259,
ves_icall_System_Runtime_RuntimeImports_Memmove,
// token 260,
ves_icall_System_Buffer_BulkMoveWithWriteBarrier,
// token 283,
ves_icall_System_Delegate_AllocDelegateLike_internal_raw,
// token 284,
ves_icall_System_Delegate_CreateDelegate_internal_raw,
// token 285,
ves_icall_System_Delegate_GetVirtualMethod_internal_raw,
// token 300,
ves_icall_System_Enum_GetEnumValuesAndNames_raw,
// token 301,
ves_icall_System_Enum_InternalGetCorElementType,
// token 302,
ves_icall_System_Enum_InternalGetUnderlyingType_raw,
// token 389,
ves_icall_System_Environment_get_ProcessorCount,
// token 390,
ves_icall_System_Environment_get_TickCount,
// token 391,
ves_icall_System_Environment_get_TickCount64,
// token 394,
ves_icall_System_Environment_FailFast_raw,
// token 424,
ves_icall_System_GC_register_ephemeron_array_raw,
// token 425,
ves_icall_System_GC_get_ephemeron_tombstone_raw,
// token 427,
ves_icall_System_GC_SuppressFinalize_raw,
// token 429,
ves_icall_System_GC_ReRegisterForFinalize_raw,
// token 431,
ves_icall_System_GC_GetGCMemoryInfo,
// token 433,
ves_icall_System_GC_AllocPinnedArray_raw,
// token 438,
ves_icall_System_Object_MemberwiseClone_raw,
// token 446,
ves_icall_System_Math_Ceiling,
// token 447,
ves_icall_System_Math_Cos,
// token 448,
ves_icall_System_Math_Floor,
// token 449,
ves_icall_System_Math_Pow,
// token 450,
ves_icall_System_Math_Sin,
// token 451,
ves_icall_System_Math_Sqrt,
// token 452,
ves_icall_System_Math_Tan,
// token 453,
ves_icall_System_Math_ModF,
// token 528,
ves_icall_RuntimeMethodHandle_GetFunctionPointer_raw,
// token 535,
ves_icall_RuntimeMethodHandle_ReboxFromNullable_raw,
// token 536,
ves_icall_RuntimeMethodHandle_ReboxToNullable_raw,
// token 605,
ves_icall_RuntimeType_GetCorrespondingInflatedMethod_raw,
// token 611,
ves_icall_RuntimeType_make_array_type_raw,
// token 614,
ves_icall_RuntimeType_make_byref_type_raw,
// token 616,
ves_icall_RuntimeType_make_pointer_type_raw,
// token 621,
ves_icall_RuntimeType_MakeGenericType_raw,
// token 622,
ves_icall_RuntimeType_GetMethodsByName_native_raw,
// token 624,
ves_icall_RuntimeType_GetPropertiesByName_native_raw,
// token 625,
ves_icall_RuntimeType_GetConstructors_native_raw,
// token 629,
ves_icall_System_RuntimeType_CreateInstanceInternal_raw,
// token 630,
ves_icall_RuntimeType_GetDeclaringMethod_raw,
// token 632,
ves_icall_System_RuntimeType_getFullName_raw,
// token 633,
ves_icall_RuntimeType_GetGenericArgumentsInternal_raw,
// token 636,
ves_icall_RuntimeType_GetGenericParameterPosition,
// token 637,
ves_icall_RuntimeType_GetEvents_native_raw,
// token 638,
ves_icall_RuntimeType_GetFields_native_raw,
// token 641,
ves_icall_RuntimeType_GetInterfaces_raw,
// token 643,
ves_icall_RuntimeType_GetNestedTypes_native_raw,
// token 646,
ves_icall_RuntimeType_GetDeclaringType_raw,
// token 648,
ves_icall_RuntimeType_GetName_raw,
// token 650,
ves_icall_RuntimeType_GetNamespace_raw,
// token 659,
ves_icall_RuntimeType_FunctionPointerReturnAndParameterTypes_raw,
// token 717,
ves_icall_RuntimeTypeHandle_GetAttributes,
// token 719,
ves_icall_RuntimeTypeHandle_GetMetadataToken_raw,
// token 721,
ves_icall_RuntimeTypeHandle_GetGenericTypeDefinition_impl_raw,
// token 731,
ves_icall_RuntimeTypeHandle_GetCorElementType,
// token 732,
ves_icall_RuntimeTypeHandle_HasInstantiation,
// token 733,
ves_icall_RuntimeTypeHandle_IsInstanceOfType_raw,
// token 735,
ves_icall_RuntimeTypeHandle_HasReferences_raw,
// token 740,
ves_icall_RuntimeTypeHandle_GetArrayRank_raw,
// token 741,
ves_icall_RuntimeTypeHandle_GetAssembly_raw,
// token 742,
ves_icall_RuntimeTypeHandle_GetElementType_raw,
// token 743,
ves_icall_RuntimeTypeHandle_GetModule_raw,
// token 744,
ves_icall_RuntimeTypeHandle_GetBaseType_raw,
// token 752,
ves_icall_RuntimeTypeHandle_type_is_assignable_from_raw,
// token 753,
ves_icall_RuntimeTypeHandle_IsGenericTypeDefinition,
// token 754,
ves_icall_RuntimeTypeHandle_GetGenericParameterInfo_raw,
// token 758,
ves_icall_RuntimeTypeHandle_is_subclass_of_raw,
// token 759,
ves_icall_RuntimeTypeHandle_IsByRefLike_raw,
// token 761,
ves_icall_System_RuntimeTypeHandle_internal_from_name_raw,
// token 763,
ves_icall_System_String_FastAllocateString_raw,
// token 947,
ves_icall_System_Type_internal_from_handle_raw,
// token 1104,
ves_icall_System_ValueType_InternalGetHashCode_raw,
// token 1105,
ves_icall_System_ValueType_Equals_raw,
// token 6599,
ves_icall_System_Threading_Interlocked_CompareExchange_Int,
// token 6600,
ves_icall_System_Threading_Interlocked_CompareExchange_Object,
// token 6602,
ves_icall_System_Threading_Interlocked_Decrement_Int,
// token 6603,
ves_icall_System_Threading_Interlocked_Increment_Int,
// token 6604,
ves_icall_System_Threading_Interlocked_Increment_Long,
// token 6605,
ves_icall_System_Threading_Interlocked_Exchange_Int,
// token 6606,
ves_icall_System_Threading_Interlocked_Exchange_Object,
// token 6608,
ves_icall_System_Threading_Interlocked_CompareExchange_Long,
// token 6609,
ves_icall_System_Threading_Interlocked_Exchange_Long,
// token 6610,
ves_icall_System_Threading_Interlocked_Add_Int,
// token 6625,
ves_icall_System_Threading_Monitor_Monitor_Enter_raw,
// token 6627,
mono_monitor_exit_icall_raw,
// token 6632,
ves_icall_System_Threading_Monitor_Monitor_pulse_raw,
// token 6634,
ves_icall_System_Threading_Monitor_Monitor_pulse_all_raw,
// token 6636,
ves_icall_System_Threading_Monitor_Monitor_wait_raw,
// token 6638,
ves_icall_System_Threading_Monitor_Monitor_try_enter_with_atomic_var_raw,
// token 6689,
ves_icall_System_Threading_Thread_InitInternal_raw,
// token 6690,
ves_icall_System_Threading_Thread_GetCurrentThread,
// token 6692,
ves_icall_System_Threading_InternalThread_Thread_free_internal_raw,
// token 6693,
ves_icall_System_Threading_Thread_GetState_raw,
// token 6694,
ves_icall_System_Threading_Thread_SetState_raw,
// token 6695,
ves_icall_System_Threading_Thread_ClrState_raw,
// token 6696,
ves_icall_System_Threading_Thread_SetName_icall_raw,
// token 6698,
ves_icall_System_Threading_Thread_YieldInternal,
// token 6700,
ves_icall_System_Threading_Thread_SetPriority_raw,
// token 7648,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_PrepareForAssemblyLoadContextRelease_raw,
// token 7652,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_GetLoadContextForAssembly_raw,
// token 7654,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFile_raw,
// token 7655,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalInitializeNativeALC_raw,
// token 7656,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalLoadFromStream_raw,
// token 7657,
ves_icall_System_Runtime_Loader_AssemblyLoadContext_InternalGetLoadedAssemblies_raw,
// token 8040,
ves_icall_System_GCHandle_InternalAlloc_raw,
// token 8041,
ves_icall_System_GCHandle_InternalFree_raw,
// token 8042,
ves_icall_System_GCHandle_InternalGet_raw,
// token 8043,
ves_icall_System_GCHandle_InternalSet_raw,
// token 8059,
ves_icall_System_Runtime_InteropServices_Marshal_GetLastPInvokeError,
// token 8060,
ves_icall_System_Runtime_InteropServices_Marshal_SetLastPInvokeError,
// token 8061,
ves_icall_System_Runtime_InteropServices_Marshal_StructureToPtr_raw,
// token 8104,
ves_icall_System_Runtime_InteropServices_NativeLibrary_LoadByName_raw,
// token 8168,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InternalGetHashCode_raw,
// token 8178,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetUninitializedObjectInternal_raw,
// token 8179,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InitializeArray_raw,
// token 8180,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_GetSpanDataFrom_raw,
// token 8181,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_SufficientExecutionStack,
// token 8182,
ves_icall_System_Runtime_CompilerServices_RuntimeHelpers_InternalBox_raw,
// token 8444,
ves_icall_System_Reflection_Assembly_GetEntryAssembly_raw,
// token 8448,
ves_icall_System_Reflection_Assembly_InternalLoad_raw,
// token 8449,
ves_icall_System_Reflection_Assembly_InternalGetType_raw,
// token 8476,
ves_icall_System_Reflection_AssemblyName_GetNativeName,
// token 8510,
ves_icall_MonoCustomAttrs_GetCustomAttributesInternal_raw,
// token 8517,
ves_icall_MonoCustomAttrs_GetCustomAttributesDataInternal_raw,
// token 8524,
ves_icall_MonoCustomAttrs_IsDefinedInternal_raw,
// token 8535,
ves_icall_System_Reflection_FieldInfo_internal_from_handle_type_raw,
// token 8538,
ves_icall_System_Reflection_FieldInfo_get_marshal_info_raw,
// token 8559,
ves_icall_System_Reflection_LoaderAllocatorScout_Destroy,
// token 8634,
ves_icall_System_Reflection_RuntimeAssembly_GetManifestResourceNames_raw,
// token 8636,
ves_icall_System_Reflection_RuntimeAssembly_GetExportedTypes_raw,
// token 8645,
ves_icall_System_Reflection_RuntimeAssembly_GetInfo_raw,
// token 8647,
ves_icall_System_Reflection_RuntimeAssembly_GetManifestResourceInternal_raw,
// token 8648,
ves_icall_System_Reflection_Assembly_GetManifestModuleInternal_raw,
// token 8655,
ves_icall_System_Reflection_RuntimeCustomAttributeData_ResolveArgumentsInternal_raw,
// token 8670,
ves_icall_RuntimeEventInfo_get_event_info_raw,
// token 8690,
ves_icall_reflection_get_token_raw,
// token 8691,
ves_icall_System_Reflection_EventInfo_internal_from_handle_type_raw,
// token 8699,
ves_icall_RuntimeFieldInfo_ResolveType_raw,
// token 8701,
ves_icall_RuntimeFieldInfo_GetParentType_raw,
// token 8708,
ves_icall_RuntimeFieldInfo_GetFieldOffset_raw,
// token 8709,
ves_icall_RuntimeFieldInfo_GetValueInternal_raw,
// token 8712,
ves_icall_RuntimeFieldInfo_GetRawConstantValue_raw,
// token 8717,
ves_icall_reflection_get_token_raw,
// token 8723,
ves_icall_get_method_info_raw,
// token 8724,
ves_icall_get_method_attributes,
// token 8731,
ves_icall_System_Reflection_MonoMethodInfo_get_parameter_info_raw,
// token 8733,
ves_icall_System_MonoMethodInfo_get_retval_marshal_raw,
// token 8745,
ves_icall_System_Reflection_RuntimeMethodInfo_GetMethodFromHandleInternalType_native_raw,
// token 8748,
ves_icall_RuntimeMethodInfo_get_name_raw,
// token 8749,
ves_icall_RuntimeMethodInfo_get_base_method_raw,
// token 8750,
ves_icall_reflection_get_token_raw,
// token 8761,
ves_icall_InternalInvoke_raw,
// token 8771,
ves_icall_RuntimeMethodInfo_GetPInvoke_raw,
// token 8777,
ves_icall_RuntimeMethodInfo_MakeGenericMethod_impl_raw,
// token 8778,
ves_icall_RuntimeMethodInfo_GetGenericArguments_raw,
// token 8779,
ves_icall_RuntimeMethodInfo_GetGenericMethodDefinition_raw,
// token 8781,
ves_icall_RuntimeMethodInfo_get_IsGenericMethodDefinition_raw,
// token 8782,
ves_icall_RuntimeMethodInfo_get_IsGenericMethod_raw,
// token 8799,
ves_icall_InvokeClassConstructor_raw,
// token 8801,
ves_icall_InternalInvoke_raw,
// token 8816,
ves_icall_reflection_get_token_raw,
// token 8834,
ves_icall_System_Reflection_RuntimeModule_ResolveMethodToken_raw,
// token 8861,
ves_icall_RuntimePropertyInfo_get_property_info_raw,
// token 8885,
ves_icall_reflection_get_token_raw,
// token 8886,
ves_icall_System_Reflection_RuntimePropertyInfo_internal_from_handle_type_raw,
// token 9353,
ves_icall_DynamicMethod_create_dynamic_method_raw,
// token 9432,
ves_icall_AssemblyBuilder_basic_init_raw,
// token 9433,
ves_icall_AssemblyBuilder_UpdateNativeCustomAttributes_raw,
// token 9585,
ves_icall_ModuleBuilder_basic_init_raw,
// token 9586,
ves_icall_ModuleBuilder_set_wrappers_type_raw,
// token 9590,
ves_icall_ModuleBuilder_getToken_raw,
// token 9593,
ves_icall_ModuleBuilder_RegisterToken_raw,
// token 9638,
ves_icall_TypeBuilder_create_runtime_class_raw,
// token 10011,
ves_icall_System_IO_Stream_HasOverriddenBeginEndRead_raw,
// token 10012,
ves_icall_System_IO_Stream_HasOverriddenBeginEndWrite_raw,
// token 10213,
ves_icall_System_Diagnostics_Debugger_IsAttached_internal,
// token 10217,
ves_icall_System_Diagnostics_StackFrame_GetFrameInfo,
// token 10227,
ves_icall_System_Diagnostics_StackTrace_GetTrace,
// token 10841,
ves_icall_Mono_RuntimeClassHandle_GetTypeFromClass,
// token 10862,
ves_icall_Mono_RuntimeGPtrArrayHandle_GPtrArrayFree,
// token 10864,
ves_icall_Mono_SafeStringMarshal_StringToUtf8,
// token 10866,
ves_icall_Mono_SafeStringMarshal_GFree,
};
static uint8_t corlib_icall_flags [] = {
0,
0,
0,
0,
4,
4,
0,
4,
4,
4,
0,
0,
0,
4,
4,
4,
4,
0,
4,
0,
0,
0,
4,
4,
4,
4,
4,
0,
4,
4,
0,
0,
0,
0,
0,
0,
0,
0,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
0,
0,
4,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
0,
0,
0,
0,
0,
0,
0,
0,
0,
0,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
0,
0,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
0,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
4,
0,
0,
0,
0,
0,
0,
0,
};
