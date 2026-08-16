const REPORT_CODE = "123";
const STAFF_CODE = "123";
const STORAGE_KEY = "mapm-helpdesk-tickets";
const LOG_KEY = "mapm-helpdesk-activity-log";
const MAX_STORAGE_BYTES = 100 * 1024 * 1024;
const LANG_KEY = "ku-facility-language";

const i18n = {
  th: {
    eyebrow: "ระบบแจ้งซ่อมและบำรุงรักษา",
    loadingDateTime: "กำลังโหลดวันเวลา",
    statusOpen: "แจ้งงาน",
    statusAck: "กำลังดำเนินงาน",
    statusDone: "งานเสร็จแล้ว",
    doneShort: "เสร็จแล้ว",
    statusCancelled: "ยกเลิกงาน",
    urgentJobs: "งานเร่งด่วน",
    urgentShort: "เร่งด่วน",
    totalJobs: "งานทั้งหมด",
    overallProgress: "ความคืบหน้างานทั้งหมด",
    comparisonChart: "กราฟเปรียบเทียบ",
    chartDescription: "กราฟแท่งพร้อม filter เปรียบเทียบตามสถานะ อาคาร และเดือน",
    compareBy: "เปรียบเทียบ",
    jobStatus: "สถานะงาน",
    building: "อาคาร",
    month: "เดือน",
    allBuildings: "ทุกอาคาร",
    allMonths: "ทุกเดือน",
    reportJob: "แจ้งงาน",
    closeJob: "ปิดงาน",
    maintenanceRequest: "แจ้งงานซ่อมบำรุง",
    requestCode: "รหัสนิสิต",
    requesterName: "ชื่อผู้แจ้ง",
    requesterEmail: "อีเมลผู้แจ้ง",
    priority: "ความเร่งด่วน",
    priorityNormal: "ปกติ",
    priorityUrgent: "เร่งด่วน",
    priorityCritical: "วิกฤต",
    floor: "ชั้น",
    symptom: "อาการที่เสียหาย",
    beforePhoto: "รูปของปัญหา",
    saveRequest: "บันทึกงานแจ้งซ่อม",
    updateDone: "อัปเดตงานเสร็จแล้ว",
    staffCode: "รหัสเจ้าหน้าที่",
    ticketId: "รหัสที่แจ้ง",
    resolution: "รายละเอียดหลังดำเนินการ",
    afterPhoto: "รูปหลังทำ",
    jobList: "รายการงาน",
    searchPlaceholder: "ค้นหารหัส / อาคาร / ผู้แจ้ง",
    allStatuses: "ทุกสถานะ",
    activityDescription: "บันทึกการแจ้งงาน เริ่มดำเนินงาน ปิดงาน ยกเลิกงาน และนำเข้าข้อมูล",
    chartTitleStatus: "เปรียบเทียบตามสถานะงาน",
    chartTitleBuilding: "เปรียบเทียบตามอาคาร",
    chartTitleMonth: "เปรียบเทียบตามเดือน",
    noJobs: "ยังไม่มีงานในระบบ",
    showingJobs: (shown, total) => `แสดง ${shown} จาก ${total} งาน`,
    noMatchingJobs: "ไม่พบรายการงานตามเงื่อนไขปัจจุบัน",
    viewDetail: "ดูรายละเอียด",
    age: "อายุงาน",
    waitStart: "รอเริ่ม",
    workingTime: "ดำเนินงาน",
    closedAfter: "ปิดงานแล้ว",
    cancelledAfter: "ยกเลิกแล้ว",
    status: "สถานะ",
    operation: "การดำเนินงาน",
    operationSince: (time) => `กำลังดำเนินงาน ตั้งแต่ ${time}`,
    waitingOperation: "ยังรอเจ้าหน้าที่เริ่มดำเนินงาน",
    requester: "ผู้แจ้ง",
    email: "อีเมล",
    location: "สถานที่",
    reportedAt: "แจ้งเมื่อ",
    waitingBeforeStart: "เวลารอก่อนเริ่มดำเนินงาน",
    workDuration: "ระยะเวลาดำเนินงาน",
    closedAt: "ปิดงานเมื่อ",
    cancelledAt: "ยกเลิกเมื่อ",
    startWork: "เริ่มดำเนินงาน",
    cancelJob: "ยกเลิกงาน",
    beforeWork: "ก่อนดำเนินการ",
    afterWork: "หลังดำเนินการ",
    noAfterPhoto: "ยังไม่ได้อัปโหลดรูปหลังทำ",
    storageCleanup: "ระบบจะล้างข้อมูลเก่าที่เสร็จแล้วหรือยกเลิกแล้วก่อน เมื่อข้อมูลเกิน 100 MB",
    storageCleaned: (count, time) => `ล้างข้อมูลอัตโนมัติแล้ว ${count} งาน เมื่อ ${time}`,
    storageText: (usage, max, jobs, logs) => `${usage} / ${max} (${jobs} งาน, ${logs} log)`,
    invalidRequestCode: "รหัสนิสิตไม่ถูกต้อง",
    requestSaved: (id) => `บันทึกสำเร็จ รหัสที่แจ้งคือ ${id}`,
    invalidStaffCode: "รหัสเจ้าหน้าที่ไม่ถูกต้อง",
    ticketNotFound: "ไม่พบรหัสงานที่แจ้ง",
    jobClosed: (id) => `อัปเดต ${id} เป็นเสร็จแล้ว`,
    promptStartWork: "ใส่รหัสเจ้าหน้าที่เพื่อเริ่มดำเนินงาน",
    promptCancelJob: "ใส่รหัสเจ้าหน้าที่เพื่อยกเลิกงาน",
    invalidImportFile: "ไฟล์ข้อมูลไม่ถูกต้อง",
  },
  en: {
    eyebrow: "Repair and Maintenance Request System",
    loadingDateTime: "Loading date and time",
    statusOpen: "New Request",
    statusAck: "In Progress",
    statusDone: "Completed",
    doneShort: "Completed",
    statusCancelled: "Cancelled",
    urgentJobs: "Urgent",
    urgentShort: "Urgent",
    totalJobs: "Total",
    overallProgress: "Overall Progress",
    comparisonChart: "Comparison Chart",
    chartDescription: "Bar chart with filters by status, building, and month",
    compareBy: "Compare by",
    jobStatus: "Job Status",
    building: "Building",
    month: "Month",
    allBuildings: "All buildings",
    allMonths: "All months",
    reportJob: "Report",
    closeJob: "Close Job",
    maintenanceRequest: "Maintenance Request",
    requestCode: "Request Code",
    requesterName: "Requester",
    requesterEmail: "Requester Email",
    priority: "Priority",
    priorityNormal: "Normal",
    priorityUrgent: "Urgent",
    priorityCritical: "Critical",
    floor: "Floor",
    symptom: "Issue Description",
    beforePhoto: "Issue Photo",
    saveRequest: "Submit Request",
    updateDone: "Update Completed Job",
    staffCode: "Staff Code",
    ticketId: "Ticket ID",
    resolution: "Resolution Details",
    afterPhoto: "After Photo",
    jobList: "Job List",
    searchPlaceholder: "Search ticket / building / requester",
    allStatuses: "All statuses",
    activityDescription: "Logs requests, work starts, closures, cancellations, and imports",
    chartTitleStatus: "Compare by Job Status",
    chartTitleBuilding: "Compare by Building",
    chartTitleMonth: "Compare by Month",
    noJobs: "No jobs in the system",
    showingJobs: (shown, total) => `Showing ${shown} of ${total} jobs`,
    noMatchingJobs: "No jobs match the current filters",
    viewDetail: "Details",
    age: "Age",
    waitStart: "Wait",
    workingTime: "Work",
    closedAfter: "Closed",
    cancelledAfter: "Cancelled",
    status: "Status",
    operation: "Operation",
    operationSince: (time) => `In progress since ${time}`,
    waitingOperation: "Waiting for staff to start",
    requester: "Requester",
    email: "Email",
    location: "Location",
    reportedAt: "Reported at",
    waitingBeforeStart: "Waiting time before start",
    workDuration: "Work duration",
    closedAt: "Closed at",
    cancelledAt: "Cancelled at",
    startWork: "Start Work",
    cancelJob: "Cancel Job",
    beforeWork: "Before",
    afterWork: "After",
    noAfterPhoto: "No after photo uploaded",
    storageCleanup: "The system clears old completed or cancelled records first when data exceeds 100 MB",
    storageCleaned: (count, time) => `Auto cleanup cleared ${count} jobs at ${time}`,
    storageText: (usage, max, jobs, logs) => `${usage} / ${max} (${jobs} jobs, ${logs} logs)`,
    invalidRequestCode: "Invalid request code",
    requestSaved: (id) => `Saved successfully. Ticket ID: ${id}`,
    invalidStaffCode: "Invalid staff code",
    ticketNotFound: "Ticket ID not found",
    jobClosed: (id) => `${id} has been marked completed`,
    promptStartWork: "Enter staff code to start work",
    promptCancelJob: "Enter staff code to cancel this job",
    invalidImportFile: "Invalid data file",
  },
};

const state = {
  tickets: loadTickets(),
  logs: loadLogs(),
  lang: localStorage.getItem(LANG_KEY) || "th",
  statusFilter: "all",
  search: "",
  lastCleanup: null,
};

const els = {
  openCount: document.querySelector("#openCount"),
  ackCount: document.querySelector("#ackCount"),
  doneCount: document.querySelector("#doneCount"),
  urgentCount: document.querySelector("#urgentCount"),
  totalCount: document.querySelector("#totalCount"),
  progressPercent: document.querySelector("#progressPercent"),
  storageStatusText: document.querySelector("#storageStatusText"),
  storagePercent: document.querySelector("#storagePercent"),
  storageFill: document.querySelector("#storageFill"),
  cleanupStatus: document.querySelector("#cleanupStatus"),
  chartMode: document.querySelector("#chartMode"),
  chartBuildingFilter: document.querySelector("#chartBuildingFilter"),
  chartMonthFilter: document.querySelector("#chartMonthFilter"),
  chartTitle: document.querySelector("#chartTitle"),
  comparisonChart: document.querySelector("#comparisonChart"),
  activityLog: document.querySelector("#activityLog"),
  currentDateTime: document.querySelector("#currentDateTime"),
  reportForm: document.querySelector("#reportForm"),
  closeForm: document.querySelector("#closeForm"),
  reportMessage: document.querySelector("#reportMessage"),
  closeMessage: document.querySelector("#closeMessage"),
  reportTab: document.querySelector("#reportTab"),
  closeTab: document.querySelector("#closeTab"),
  searchInput: document.querySelector("#searchInput"),
  statusFilter: document.querySelector("#statusFilter"),
  jobList: document.querySelector("#jobList"),
  jobSummary: document.querySelector("#jobSummary"),
  detailDialog: document.querySelector("#detailDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  closeDialogBtn: document.querySelector("#closeDialogBtn"),
  exportBtn: document.querySelector("#exportBtn"),
  monthlyReportBtn: document.querySelector("#monthlyReportBtn"),
  importFile: document.querySelector("#importFile"),
  langButtons: document.querySelectorAll(".lang-btn"),
};

els.langButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});
els.reportTab.addEventListener("click", () => setPane("report"));
els.closeTab.addEventListener("click", () => setPane("close"));
els.reportForm.addEventListener("submit", handleReportSubmit);
els.closeForm.addEventListener("submit", handleCloseSubmit);
els.searchInput.addEventListener("input", (event) => {
  state.search = event.target.value.trim().toLowerCase();
  render();
});
els.statusFilter.addEventListener("change", (event) => {
  state.statusFilter = event.target.value;
  render();
});
els.chartMode.addEventListener("change", renderCharts);
els.chartBuildingFilter.addEventListener("change", renderCharts);
els.chartMonthFilter.addEventListener("change", renderCharts);
els.closeDialogBtn.addEventListener("click", () => els.detailDialog.close());
els.exportBtn.addEventListener("click", exportTickets);
els.monthlyReportBtn.addEventListener("click", exportMonthlyExcelReport);
els.importFile.addEventListener("change", importTickets);

updateCurrentDateTime();
setInterval(updateCurrentDateTime, 1000);
render();

function setPane(name) {
  const reportActive = name === "report";
  els.reportTab.classList.toggle("active", reportActive);
  els.closeTab.classList.toggle("active", !reportActive);
  els.reportForm.classList.toggle("active", reportActive);
  els.closeForm.classList.toggle("active", !reportActive);
  clearMessages();
}

async function handleReportSubmit(event) {
  event.preventDefault();
  clearMessages();

  const form = new FormData(els.reportForm);
  if (form.get("studentCode") !== REPORT_CODE) {
    showMessage(els.reportMessage, t("invalidRequestCode"), true);
    return;
  }

  const beforePhoto = await fileToDataUrl(form.get("beforePhoto"));
  const now = new Date();
  const ticket = {
    id: createTicketId(now),
    requester: clean(form.get("requester")),
    requesterEmail: clean(form.get("requesterEmail")),
    building: clean(form.get("building")),
    floor: clean(form.get("floor")),
    symptom: clean(form.get("symptom")),
    priority: form.get("priority"),
    status: "open",
    acknowledgedAt: "",
    beforePhoto,
    afterPhoto: "",
    resolution: "",
    createdAt: now.toISOString(),
    closedAt: "",
  };

  state.tickets.unshift(ticket);
  addLog("แจ้งงานใหม่", ticket.id, `${ticket.requester} แจ้งงานที่ ${ticket.building} ชั้น ${ticket.floor}`);
  saveTickets();
  els.reportForm.reset();
  showMessage(els.reportMessage, t("requestSaved", ticket.id));
  render();
}

async function handleCloseSubmit(event) {
  event.preventDefault();
  clearMessages();

  const form = new FormData(els.closeForm);
  if (form.get("staffCode") !== STAFF_CODE) {
    showMessage(els.closeMessage, t("invalidStaffCode"), true);
    return;
  }

  const ticketId = clean(form.get("ticketId")).toUpperCase();
  const ticket = state.tickets.find((item) => item.id === ticketId);
  if (!ticket) {
    showMessage(els.closeMessage, t("ticketNotFound"), true);
    return;
  }

  if (!ticket.acknowledgedAt) {
    ticket.acknowledgedAt = new Date().toISOString();
  }
  ticket.status = "done";
  ticket.resolution = clean(form.get("resolution"));
  ticket.afterPhoto = await fileToDataUrl(form.get("afterPhoto"));
  ticket.closedAt = new Date().toISOString();

  addLog("ปิดงาน", ticket.id, `ปิดงานพร้อมรูปหลังทำและรายละเอียด: ${ticket.resolution}`);
  saveTickets();
  els.closeForm.reset();
  showMessage(els.closeMessage, t("jobClosed", ticket.id));
  render();
}

function render() {
  applyLanguage();
  renderMetrics();
  renderJobs();
  renderStorageStatus();
  renderChartFilters();
  renderCharts();
  renderActivityLog();
}

function t(key, ...args) {
  const value = i18n[state.lang][key] ?? i18n.th[key] ?? key;
  return typeof value === "function" ? value(...args) : value;
}

function setLanguage(lang) {
  state.lang = lang;
  localStorage.setItem(LANG_KEY, lang);
  render();
  updateCurrentDateTime();
}

function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  els.langButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

function renderMetrics() {
  const open = state.tickets.filter((ticket) => ticket.status === "open").length;
  const acknowledged = state.tickets.filter((ticket) => ticket.status === "acknowledged").length;
  const done = state.tickets.filter((ticket) => ticket.status === "done").length;
  const urgent = state.tickets.filter((ticket) => !["done", "cancelled"].includes(ticket.status) && ticket.priority !== "normal").length;

  els.openCount.textContent = open;
  els.ackCount.textContent = acknowledged;
  els.doneCount.textContent = done;
  els.urgentCount.textContent = urgent;
  els.totalCount.textContent = state.tickets.length;
  const progress = state.tickets.length ? Math.round((done / state.tickets.length) * 100) : 0;
  els.progressPercent.textContent = `${progress}%`;
}

function updateCurrentDateTime() {
  els.currentDateTime.textContent = new Intl.DateTimeFormat(locale(), {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(new Date());
}

function renderStorageStatus() {
  const usage = estimateStorageBytes();
  const percent = Math.min(100, Math.round((usage / MAX_STORAGE_BYTES) * 100));
  els.storageStatusText.textContent = t("storageText", formatBytes(usage), formatBytes(MAX_STORAGE_BYTES), state.tickets.length, state.logs.length);
  els.storagePercent.textContent = `${percent}%`;
  els.storageFill.style.width = `${percent}%`;
  els.cleanupStatus.textContent = state.lastCleanup
    ? t("storageCleaned", state.lastCleanup.removed, formatDateTime(state.lastCleanup.at))
    : t("storageCleanup");
}

function renderCharts() {
  const mode = els.chartMode.value;
  const tickets = filteredChartTickets();
  const stats = buildComparisonStats(tickets, mode);
  els.chartTitle.textContent = {
    status: t("chartTitleStatus"),
    building: t("chartTitleBuilding"),
    month: t("chartTitleMonth"),
  }[mode];
  renderBarChart(els.comparisonChart, stats);
}

function renderJobs() {
  const jobs = filteredTickets();
  els.jobSummary.textContent = state.tickets.length
    ? t("showingJobs", jobs.length, state.tickets.length)
    : t("noJobs");

  if (!jobs.length) {
    els.jobList.innerHTML = `<div class="empty">${t("noMatchingJobs")}</div>`;
    return;
  }

  els.jobList.innerHTML = jobs.map((ticket) => `
    <article class="job-card">
      <img class="thumb" src="${ticket.beforePhoto}" alt="รูปปัญหา ${escapeHtml(ticket.id)}">
      <div class="job-main">
        <h3>${escapeHtml(ticket.id)} · ${escapeHtml(ticket.building)} ชั้น ${escapeHtml(ticket.floor)}</h3>
        <p>${escapeHtml(ticket.symptom)}</p>
        <div class="badges">
          <span class="badge ${ticket.status}">${statusLabel(ticket.status)}</span>
          <span class="badge ${ticket.priority}">${priorityLabel(ticket.priority)}</span>
          <span class="badge">${formatDate(ticket.createdAt)}</span>
          <span class="badge">${escapeHtml(ticket.requester)}</span>
          ${ticket.requesterEmail ? `<span class="badge">${escapeHtml(ticket.requesterEmail)}</span>` : ""}
        </div>
        <div class="time-badges">
          ${timelineBadges(ticket)}
        </div>
      </div>
      <button class="view-btn" type="button" data-id="${ticket.id}">${t("viewDetail")}</button>
    </article>
  `).join("");

  document.querySelectorAll(".view-btn").forEach((button) => {
    button.addEventListener("click", () => openDetail(button.dataset.id));
  });
}

function openDetail(id) {
  const ticket = state.tickets.find((item) => item.id === id);
  if (!ticket) return;

  els.dialogContent.innerHTML = `
    <h2>${escapeHtml(ticket.id)}</h2>
    <div class="detail-grid">
      <div>
        <h3>${t("beforeWork")}</h3>
        <img src="${ticket.beforePhoto}" alt="${t("beforeWork")}">
      </div>
      <div>
        <h3>${t("afterWork")}</h3>
        ${ticket.afterPhoto ? `<img src="${ticket.afterPhoto}" alt="${t("afterWork")}">` : `<div class="empty">${t("noAfterPhoto")}</div>`}
      </div>
    </div>
    <div class="detail-text">
      <p><strong>${t("status")}:</strong> ${statusLabel(ticket.status)}</p>
      <p><strong>${t("operation")}:</strong> ${ticket.acknowledgedAt ? t("operationSince", formatDateTime(ticket.acknowledgedAt)) : t("waitingOperation")}</p>
      <p><strong>${t("requester")}:</strong> ${escapeHtml(ticket.requester)}</p>
      ${ticket.requesterEmail ? `<p><strong>${t("email")}:</strong> ${escapeHtml(ticket.requesterEmail)}</p>` : ""}
      <p><strong>${t("location")}:</strong> ${escapeHtml(ticket.building)} ${t("floor")} ${escapeHtml(ticket.floor)}</p>
      <p><strong>${t("symptom")}:</strong> ${escapeHtml(ticket.symptom)}</p>
      <p><strong>${t("reportedAt")}:</strong> ${formatDateTime(ticket.createdAt)}</p>
      <p><strong>${t("age")}:</strong> ${durationText(new Date(ticket.createdAt), new Date(ticket.closedAt || ticket.cancelledAt || Date.now()))}</p>
      ${ticket.acknowledgedAt ? `<p><strong>${t("waitingBeforeStart")}:</strong> ${durationText(new Date(ticket.createdAt), new Date(ticket.acknowledgedAt))}</p>` : ""}
      ${ticket.acknowledgedAt ? `<p><strong>${t("workDuration")}:</strong> ${durationText(new Date(ticket.acknowledgedAt), new Date(ticket.closedAt || ticket.cancelledAt || Date.now()))}</p>` : ""}
      ${ticket.closedAt ? `<p><strong>${t("closedAt")}:</strong> ${formatDateTime(ticket.closedAt)}</p>` : ""}
      ${ticket.cancelledAt ? `<p><strong>${t("cancelledAt")}:</strong> ${formatDateTime(ticket.cancelledAt)}</p>` : ""}
      ${ticket.resolution ? `<p><strong>${t("resolution")}:</strong> ${escapeHtml(ticket.resolution)}</p>` : ""}
      ${ticket.status === "open" ? `<button class="ack-btn" type="button" data-ack-id="${ticket.id}">${t("startWork")}</button>` : ""}
      ${ticket.status !== "cancelled" ? `<button class="danger-btn" type="button" data-cancel-id="${ticket.id}">${t("cancelJob")}</button>` : ""}
    </div>
  `;
  els.detailDialog.showModal();
  const ackButton = els.dialogContent.querySelector("[data-ack-id]");
  if (ackButton) ackButton.addEventListener("click", () => acknowledgeTicket(ticket.id));
  const cancelButton = els.dialogContent.querySelector("[data-cancel-id]");
  if (cancelButton) cancelButton.addEventListener("click", () => cancelTicket(ticket.id));
}

function filteredTickets() {
  return state.tickets.filter((ticket) => {
    const statusMatch = state.statusFilter === "all" || ticket.status === state.statusFilter;
    const haystack = `${ticket.id} ${ticket.requester} ${ticket.requesterEmail || ""} ${ticket.building} ${ticket.floor} ${ticket.symptom}`.toLowerCase();
    return statusMatch && haystack.includes(state.search);
  });
}

function createTicketId(date) {
  const yymmdd = date.toISOString().slice(2, 10).replaceAll("-", "");
  const sameDayCount = state.tickets.filter((ticket) => ticket.id.includes(`MAPM-${yymmdd}`)).length + 1;
  return `MAPM-${yymmdd}-${String(sameDayCount).padStart(3, "0")}`;
}

function acknowledgeTicket(id) {
  const staffCode = prompt(t("promptStartWork"));
  if (staffCode !== STAFF_CODE) {
    alert(t("invalidStaffCode"));
    return;
  }

  const ticket = state.tickets.find((item) => item.id === id);
  if (!ticket || ticket.status !== "open") return;

  ticket.status = "acknowledged";
  ticket.acknowledgedAt = new Date().toISOString();
  addLog("เริ่มดำเนินงาน", ticket.id, "เจ้าหน้าที่เริ่มดำเนินงานแล้ว");
  saveTickets();
  if (els.detailDialog.open) els.detailDialog.close();
  openDetail(ticket.id);
  render();
}

function cancelTicket(id) {
  const staffCode = prompt(t("promptCancelJob"));
  if (staffCode !== STAFF_CODE) {
    alert(t("invalidStaffCode"));
    return;
  }

  const ticket = state.tickets.find((item) => item.id === id);
  if (!ticket || ticket.status === "cancelled") return;

  ticket.status = "cancelled";
  ticket.cancelledAt = new Date().toISOString();
  addLog("ยกเลิกงาน", ticket.id, `ยกเลิกงานของ ${ticket.requester} จาก ${ticket.building} ชั้น ${ticket.floor}`);
  saveTickets();
  els.detailDialog.close();
  render();
}

function priorityLabel(priority) {
  return {
    normal: t("priorityNormal"),
    urgent: t("priorityUrgent"),
    critical: t("priorityCritical"),
  }[priority] || t("priorityNormal");
}

function statusLabel(status) {
  return {
    open: t("statusOpen"),
    acknowledged: t("statusAck"),
    done: t("doneShort"),
    cancelled: t("statusCancelled"),
  }[status] || t("statusOpen");
}

function timelineBadges(ticket) {
  const created = new Date(ticket.createdAt);
  const acknowledged = ticket.acknowledgedAt ? new Date(ticket.acknowledgedAt) : null;
  const closed = ticket.closedAt ? new Date(ticket.closedAt) : null;
  const cancelled = ticket.cancelledAt ? new Date(ticket.cancelledAt) : null;
  const end = closed || cancelled || new Date();
  const badges = [`<span>${t("age")} ${durationText(created, end)}</span>`];

  if (acknowledged) {
    badges.push(`<span>${t("waitStart")} ${durationText(created, acknowledged)}</span>`);
    badges.push(`<span>${t("workingTime")} ${durationText(acknowledged, end)}</span>`);
  } else if (!closed && !cancelled) {
    badges.push(`<span>${t("waitStart")} ${durationText(created, new Date())}</span>`);
  }

  if (closed) badges.push(`<span>${t("closedAfter")} ${durationText(created, closed)}</span>`);
  if (cancelled) badges.push(`<span>${t("cancelledAfter")} ${durationText(created, cancelled)}</span>`);
  return badges.join("");
}

function durationText(start, end) {
  const diffMs = Math.max(0, end - start);
  const totalMinutes = Math.floor(diffMs / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  if (state.lang === "en") {
    if (days) return `${days}d ${hours}h`;
    if (hours) return `${hours}h ${minutes}m`;
    return `${minutes}m`;
  }
  if (days) return `${days} วัน ${hours} ชม.`;
  if (hours) return `${hours} ชม. ${minutes} นาที`;
  return `${minutes} นาที`;
}

function clean(value) {
  return String(value || "").trim();
}

function clearMessages() {
  els.reportMessage.textContent = "";
  els.closeMessage.textContent = "";
  els.reportMessage.classList.remove("error");
  els.closeMessage.classList.remove("error");
}

function showMessage(element, text, isError = false) {
  element.textContent = text;
  element.classList.toggle("error", isError);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.addEventListener("error", reject);
    reader.readAsDataURL(file);
  });
}

function loadTickets() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function saveTickets() {
  const cleanup = enforceStorageLimit();
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tickets));
    localStorage.setItem(LOG_KEY, JSON.stringify(state.logs));
  } catch {
    pruneOldestTickets(1);
    addLog("ล้างข้อมูลอัตโนมัติ", "-", "ล้างข้อมูลเก่า 1 งาน เนื่องจาก browser storage เต็ม");
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tickets));
    localStorage.setItem(LOG_KEY, JSON.stringify(state.logs));
  }
  if (cleanup.removed) state.lastCleanup = { removed: cleanup.removed, at: new Date().toISOString() };
}

function exportTickets() {
  const blob = new Blob([JSON.stringify(state.tickets, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mapm-helpdesk-${new Date().toISOString().slice(0, 10)}.json`;
  link.click();
  URL.revokeObjectURL(url);
}

function exportMonthlyExcelReport() {
  const month = new Date().toISOString().slice(0, 7);
  const monthlyTickets = state.tickets.filter((ticket) => ticket.createdAt.slice(0, 7) === month);
  const done = monthlyTickets.filter((ticket) => ticket.status === "done").length;
  const open = monthlyTickets.filter((ticket) => ticket.status === "open").length;
  const urgent = monthlyTickets.filter((ticket) => ticket.priority !== "normal").length;
  const progress = monthlyTickets.length ? Math.round((done / monthlyTickets.length) * 100) : 0;
  const avgCloseHours = averageCloseHours(monthlyTickets);
  const monthLabel = formatReportMonth(month);
  const rows = monthlyTickets.map((ticket, index) => `
    <tr>
      <td>${index + 1}</td>
      <td>${excelText(ticket.id)}</td>
      <td>${excelText(formatDateTime(ticket.createdAt))}</td>
      <td>${excelText(ticket.closedAt ? formatDateTime(ticket.closedAt) : "-")}</td>
      <td>${excelText(statusLabel(ticket.status))}</td>
      <td>${excelText(priorityLabel(ticket.priority))}</td>
      <td>${excelText(ticket.requester)}</td>
      <td>${excelText(ticket.requesterEmail || "-")}</td>
      <td>${excelText(ticket.building)}</td>
      <td>${excelText(ticket.floor)}</td>
      <td>${excelText(ticket.symptom)}</td>
      <td>${excelText(ticket.resolution || "-")}</td>
    </tr>
  `).join("");

  const workbookHtml = `
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Tahoma, Arial, sans-serif; }
          h1 { font-size: 20px; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #b7c3cf; padding: 8px; vertical-align: top; }
          th { background: #0f766e; color: #ffffff; font-weight: bold; }
          .summary th { background: #17202a; }
          .summary td { font-weight: bold; font-size: 16px; }
        </style>
      </head>
      <body>
        <h1>รายงานการทำงาน KU Facility Service Center ประจำเดือน ${excelText(monthLabel)}</h1>
        <table class="summary">
          <tr>
            <th>งานทั้งหมด</th>
            <th>งานเสร็จแล้ว</th>
            <th>แจ้งงาน</th>
            <th>งานเร่งด่วน</th>
            <th>Progress</th>
            <th>เวลาปิดงานเฉลี่ย</th>
          </tr>
          <tr>
            <td>${monthlyTickets.length}</td>
            <td>${done}</td>
            <td>${open}</td>
            <td>${urgent}</td>
            <td>${progress}%</td>
            <td>${avgCloseHours === null ? "-" : `${avgCloseHours} ชั่วโมง`}</td>
          </tr>
        </table>
        <br>
        <table>
          <tr>
            <th>ลำดับ</th>
            <th>รหัสที่แจ้ง</th>
            <th>วันที่แจ้ง</th>
            <th>วันที่ปิดงาน</th>
            <th>สถานะ</th>
            <th>ความเร่งด่วน</th>
            <th>ชื่อผู้แจ้ง</th>
            <th>อีเมลผู้แจ้ง</th>
            <th>อาคาร</th>
            <th>ชั้น</th>
            <th>อาการที่เสียหาย</th>
            <th>รายละเอียดหลังดำเนินการ</th>
          </tr>
          ${rows || '<tr><td colspan="12">ไม่มีข้อมูลงานในเดือนนี้</td></tr>'}
        </table>
      </body>
    </html>
  `;

  const blob = new Blob(["\ufeff", workbookHtml], { type: "application/vnd.ms-excel;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `mapm-report-${month}.xls`;
  link.click();
  URL.revokeObjectURL(url);
}

function importTickets(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.addEventListener("load", () => {
    try {
      const imported = JSON.parse(reader.result);
      if (!Array.isArray(imported)) throw new Error("Invalid data");
      state.tickets = imported;
      addLog("นำเข้าข้อมูล", "-", `นำเข้า ${imported.length} งานจากไฟล์ JSON`);
      saveTickets();
      render();
    } catch {
      alert(t("invalidImportFile"));
    } finally {
      event.target.value = "";
    }
  });
  reader.readAsText(file);
}

function loadLogs() {
  try {
    return JSON.parse(localStorage.getItem(LOG_KEY)) || [];
  } catch {
    return [];
  }
}

function addLog(action, ticketId, detail) {
  state.logs.unshift({
    action,
    ticketId,
    detail,
    at: new Date().toISOString(),
  });
  state.logs = state.logs.slice(0, 300);
}

function renderActivityLog() {
  const logs = state.logs.slice(0, 30);
  if (!logs.length) {
    els.activityLog.innerHTML = '<div class="empty">ยังไม่มี log การทำงาน</div>';
    return;
  }

  els.activityLog.innerHTML = logs.map((log) => `
    <div class="activity-item">
      <strong>${escapeHtml(log.action)} ${log.ticketId !== "-" ? `· ${escapeHtml(log.ticketId)}` : ""}</strong>
      <span>${escapeHtml(formatDateTime(log.at))}</span>
      <p>${escapeHtml(log.detail)}</p>
    </div>
  `).join("");
}

function enforceStorageLimit() {
  let removed = 0;
  while (estimateStorageBytes() > MAX_STORAGE_BYTES && state.tickets.length) {
    pruneOldestTickets(1);
    removed += 1;
  }
  if (removed) addLog("ล้างข้อมูลอัตโนมัติ", "-", `ล้างข้อมูลเก่า ${removed} งาน เพื่อควบคุมพื้นที่ไม่เกิน ${formatBytes(MAX_STORAGE_BYTES)}`);
  return { removed };
}

function pruneOldestTickets(count) {
  for (let i = 0; i < count; i += 1) {
    const doneOldest = oldestTicketIndex((ticket) => ["done", "cancelled"].includes(ticket.status));
    const anyOldest = oldestTicketIndex(() => true);
    const index = doneOldest >= 0 ? doneOldest : anyOldest;
    if (index >= 0) state.tickets.splice(index, 1);
  }
}

function oldestTicketIndex(predicate) {
  let result = -1;
  let oldest = Infinity;
  state.tickets.forEach((ticket, index) => {
    const time = new Date(ticket.createdAt).getTime();
    if (predicate(ticket) && time < oldest) {
      oldest = time;
      result = index;
    }
  });
  return result;
}

function estimateStorageBytes() {
  return textBytes(JSON.stringify(state.tickets)) + textBytes(JSON.stringify(state.logs));
}

function textBytes(text) {
  return new Blob([text || ""]).size;
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${bytes} B`;
}

function renderChartFilters() {
  syncSelectOptions(els.chartBuildingFilter, uniqueSorted(state.tickets.map((ticket) => ticket.building)), t("allBuildings"));
  syncSelectOptions(els.chartMonthFilter, uniqueSorted(state.tickets.map((ticket) => ticket.createdAt.slice(0, 7))), t("allMonths"));
}

function syncSelectOptions(select, values, allLabel) {
  const current = select.value;
  select.innerHTML = `<option value="all">${allLabel}</option>` + values.map((value) => (
    `<option value="${escapeHtml(value)}">${escapeHtml(formatFilterLabel(value))}</option>`
  )).join("");
  select.value = values.includes(current) ? current : "all";
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

function filteredChartTickets() {
  return state.tickets.filter((ticket) => {
    const buildingMatch = els.chartBuildingFilter.value === "all" || ticket.building === els.chartBuildingFilter.value;
    const monthMatch = els.chartMonthFilter.value === "all" || ticket.createdAt.slice(0, 7) === els.chartMonthFilter.value;
    return buildingMatch && monthMatch;
  });
}

function buildComparisonStats(tickets, mode) {
  if (mode === "status") {
    return [
      { label: t("statusOpen"), key: "open", value: tickets.filter((ticket) => ticket.status === "open").length },
      { label: t("statusAck"), key: "ack", value: tickets.filter((ticket) => ticket.status === "acknowledged").length },
      { label: t("statusDone"), key: "done", value: tickets.filter((ticket) => ticket.status === "done").length },
      { label: t("urgentJobs"), key: "urgent", value: tickets.filter((ticket) => !["done", "cancelled"].includes(ticket.status) && ticket.priority !== "normal").length },
      { label: t("statusCancelled"), key: "cancelled", value: tickets.filter((ticket) => ticket.status === "cancelled").length },
      { label: t("totalJobs"), key: "total", value: tickets.length },
    ];
  }

  const stats = new Map();
  tickets.forEach((ticket) => {
    const key = mode === "building" ? ticket.building : ticket.createdAt.slice(0, 7);
    stats.set(key, (stats.get(key) || 0) + 1);
  });
  return [...stats.entries()]
    .map(([label, value]) => ({ label: formatFilterLabel(label), key: "default", value }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

function renderBarChart(element, stats) {
  if (!stats.length) {
    element.innerHTML = '<div class="empty">ยังไม่มีข้อมูลสำหรับกราฟ</div>';
    return;
  }
  const max = Math.max(...stats.map((item) => item.value), 1);
  element.innerHTML = stats.map((item) => {
    const width = item.value ? Math.max(4, Math.round((item.value / max) * 100)) : 0;
    return `
      <div class="chart-row chart-${item.key || chartClassForLabel(item.label)}">
        <span>${escapeHtml(item.label)}</span>
        <div class="chart-track" title="${escapeHtml(item.label)} ${item.value} งาน">
          <div class="chart-fill" style="width: ${width}%">
            <span class="chart-dot">${item.value}</span>
          </div>
        </div>
        <strong>${item.value}</strong>
      </div>
    `;
  }).join("");
}

function chartClassForLabel(label) {
  if (label === t("statusOpen")) return "open";
  if (label === t("statusAck")) return "ack";
  if (label === t("urgentJobs")) return "urgent";
  if (label === t("statusDone")) return "done";
  if (label === t("statusCancelled")) return "cancelled";
  if (label === "งานทั้งหมด") return "total";
  return "default";
}

function averageCloseHours(tickets) {
  const durations = tickets
    .filter((ticket) => ticket.status === "done" && ticket.closedAt)
    .map((ticket) => (new Date(ticket.closedAt) - new Date(ticket.createdAt)) / 36e5)
    .filter((hours) => Number.isFinite(hours) && hours >= 0);
  if (!durations.length) return null;
  return Math.round((durations.reduce((sum, hours) => sum + hours, 0) / durations.length) * 10) / 10;
}

function formatDate(iso) {
  return new Intl.DateTimeFormat(locale(), { dateStyle: "medium" }).format(new Date(iso));
}

function formatReportMonth(value) {
  const [year, month] = value.split("-").map(Number);
  return new Intl.DateTimeFormat(locale(), { month: "long", year: "numeric" }).format(new Date(year, month - 1, 1));
}

function formatFilterLabel(value) {
  if (/^\d{4}-\d{2}$/.test(value)) return formatReportMonth(value);
  return value;
}

function formatDateTime(iso) {
  return new Intl.DateTimeFormat(locale(), { dateStyle: "medium", timeStyle: "short" }).format(new Date(iso));
}

function locale() {
  return state.lang === "en" ? "en-US" : "th-TH";
}

function excelText(value) {
  return escapeHtml(value).replaceAll("\n", "<br>");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
