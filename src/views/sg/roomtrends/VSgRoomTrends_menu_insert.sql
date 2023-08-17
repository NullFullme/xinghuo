-- 注意：该页面对应的前台目录为views/sg文件夹下
-- 如果你想更改到其他目录，请修改sql中component字段对应的值


INSERT INTO sys_permission(id, parent_id, name, url, component, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_route, is_leaf, keep_alive, hidden, hide_tab, description, status, del_flag, rule_flag, create_by, create_time, update_by, update_time, internal_or_external) 
VALUES ('2022093011063760330', NULL, 'v_sg_room_trends', '/sg/vSgRoomTrendsList', 'sg/VSgRoomTrendsList', NULL, NULL, 0, NULL, '1', 1.00, 0, NULL, 1, 1, 0, 0, 0, NULL, '1', 0, 0, 'admin', '2022-09-30 11:06:33', NULL, NULL, 0);

-- 权限控制sql
-- 新增
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093011063760331', '2022093011063760330', '添加v_sg_room_trends', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:v_sg_room_trends:add', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 11:06:33', NULL, NULL, 0, 0, '1', 0);
-- 编辑
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093011063760332', '2022093011063760330', '编辑v_sg_room_trends', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:v_sg_room_trends:edit', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 11:06:33', NULL, NULL, 0, 0, '1', 0);
-- 删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093011063770333', '2022093011063760330', '删除v_sg_room_trends', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:v_sg_room_trends:delete', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 11:06:33', NULL, NULL, 0, 0, '1', 0);
-- 批量删除
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093011063770334', '2022093011063760330', '批量删除v_sg_room_trends', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:v_sg_room_trends:deleteBatch', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 11:06:33', NULL, NULL, 0, 0, '1', 0);
-- 导出excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093011063800335', '2022093011063760330', '导出excel_v_sg_room_trends', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:v_sg_room_trends:exportXls', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 11:06:33', NULL, NULL, 0, 0, '1', 0);
-- 导入excel
INSERT INTO sys_permission(id, parent_id, name, url, component, is_route, component_name, redirect, menu_type, perms, perms_type, sort_no, always_show, icon, is_leaf, keep_alive, hidden, hide_tab, description, create_by, create_time, update_by, update_time, del_flag, rule_flag, status, internal_or_external)
VALUES ('2022093011063800336', '2022093011063760330', '导入excel_v_sg_room_trends', NULL, NULL, 0, NULL, NULL, 2, 'org.jeecg.modules:v_sg_room_trends:importExcel', '1', NULL, 0, NULL, 1, 0, 0, 0, NULL, 'admin', '2022-09-30 11:06:33', NULL, NULL, 0, 0, '1', 0);